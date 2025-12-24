import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { usePricingPlans, useCreateStripeCheckout } from '@/hook/pricing.hook'
import { useServices } from '@/hook/service.hook'
import { toast } from 'react-hot-toast'

const Pricing = () => {
    const navigate = useNavigate()
    // const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [selectedServiceId, setSelectedServiceId] = useState('')
    const location = useLocation()

    const { data: pricingResponse, isLoading: plansLoading, isError: plansError } = usePricingPlans()
    const pricingPlans = pricingResponse?.data || []

    const { mutate: createCheckout, isPending: isCheckingOut } = useCreateStripeCheckout()

    useEffect(() => {
        if (location.state?.serviceId) {
            setSelectedServiceId(String(location.state.serviceId))
        }
    }, [location.state])

    // Fetch services to check if we have services (though we only need the ID now)
    const { data: servicesResponse } = useServices({ per_page: 100 })

    const handleBuyNow = (plan) => {
        if (!selectedServiceId) {
            toast.error('Please select a service first from the services page.')
            navigate('/services')
            return
        }

        setSelectedPlan(plan)
        
        const baseUrl = window.location.origin;
        
        createCheckout({
            planId: plan.id,
            serviceId: selectedServiceId,
            successUrl: `${baseUrl}/my-bookings?checkout=success`,
            cancelUrl: `${baseUrl}/pricing`
        })
    }

    if (plansLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-navbar)]"></div>
            </div>
        )
    }

    if (plansError) {
        return (
            <div className="text-center py-20 text-red-500 font-poppins">
                Failed to load pricing plans. Please try again later.
            </div>
        )
    }

    return (
        <section className="bg-background py-20 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="font-poppins text-[40px] font-bold text-slate-900 dark:text-white text-center mb-4">
                    Pricing and plan
                </h1>
                <p className="font-poppins text-slate-500 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                    Choose the perfect plan for your business needs. Verified leads and premium visibility.
                </p>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                                plan.is_recommended
                                    ? 'bg-[var(--color-navbar)] text-white shadow-2xl shadow-[var(--color-navbar)]/30 md:scale-105 z-10'
                                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl'
                            }`}
                        >
                            {plan.is_recommended && (
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-navbar)] px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}

                            {/* Plan Name */}
                            <p className={`font-poppins text-[14px] font-bold mb-4 uppercase tracking-widest ${
                                plan.is_recommended ? 'text-[var(--color-accent)]' : 'text-slate-500 dark:text-slate-400'
                            }`}>
                                {plan.name}
                            </p>

                            {/* Price */}
                            <div className="flex flex-col mb-4">
                                <div className="flex items-baseline gap-1">
                                    <span className={`font-poppins text-[42px] font-bold ${
                                        plan.is_recommended ? 'text-white' : 'text-slate-900 dark:text-white'
                                    }`}>
                                        {plan.currency === 'USD' ? '$' : plan.currency}
                                        {plan.price || '00'} 
                                    </span>
                                    <span className={`font-poppins text-[16px] capitalize ${
                                        plan.is_recommended ? 'text-white/70' : 'text-slate-400 dark:text-slate-500'
                                    }`}>
                                        / {plan.billing_interval}
                                    </span>
                                </div>
                                {plan.offer_description && (
                                    <p className={`font-poppins text-[13px] font-medium mt-1 ${
                                        plan.is_recommended ? 'text-white/80' : 'text-[var(--color-accent)]'
                                    }`}>
                                        {plan.offer_description}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <p className={`font-poppins text-[14px] leading-[22px] mb-8 min-h-[44px] ${
                                plan.is_recommended ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'
                            }`}>
                                {plan.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                                            plan.is_recommended ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'
                                        }`}>
                                            <svg
                                                className={`w-3 h-3 ${plan.is_recommended ? 'text-white' : 'text-[var(--color-navbar)] dark:text-[var(--color-accent)]'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className={`font-poppins text-[14px] ${
                                            plan.is_recommended ? 'text-white' : 'text-slate-700 dark:text-slate-300'
                                        }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button 
                                onClick={() => handleBuyNow(plan)}
                                disabled={selectedPlan?.id === plan.id && isCheckingOut}
                                className={`w-full py-3.5 font-poppins text-[14px] font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                                    plan.is_recommended 
                                        ? 'bg-[var(--color-accent)] text-[var(--color-navbar)] hover:bg-yellow-400 shadow-[var(--color-accent)]/20'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                {selectedPlan?.id === plan.id && isCheckingOut ? (
                                    <>
                                        <div className={`animate-spin rounded-full h-4 w-4 border-2 ${plan.is_recommended ? 'border-white/20 border-t-white' : 'border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)]'}`}></div>
                                        Processing...
                                    </>
                                ) : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing

