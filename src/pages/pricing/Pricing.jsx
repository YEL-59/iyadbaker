import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { usePricingPlans } from '@/hook/pricing.hook'
import { useServices } from '@/hook/service.hook'

const Pricing = () => {
    const navigate = useNavigate()
    const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [selectedServiceId, setSelectedServiceId] = useState('')

    const { data: pricingResponse, isLoading: plansLoading, isError: plansError } = usePricingPlans()
    const pricingPlans = pricingResponse?.data || []

    const { data: servicesResponse } = useServices({ per_page: 100 })
    const servicesData = servicesResponse?.data?.data || []

    const handleBuyNow = (plan) => {
        setSelectedPlan(plan)
        setShowBookingModal(true)
    }

    const handleBookService = () => {
        if (!selectedServiceId) return

        const selectedService = servicesData.find(s => String(s.id) === selectedServiceId)

        const newBooking = {
            id: Date.now().toString(),
            serviceId: selectedService?.id,
            serviceTitle: selectedService?.name,
            serviceImage: selectedService?.image,
            plan: selectedPlan.name,
            price: selectedPlan.price || 0, // Fallback if price is not in API
            status: 'pending',
            createdAt: new Date().toISOString()
        }

        // Save to localStorage
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]))

        setShowBookingModal(false)
        setSelectedPlan(null)
        setSelectedServiceId('')
        navigate('/my-bookings')
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
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="font-poppins text-[40px] font-bold text-[var(--color-navbar)] text-center mb-4">
                    Pricing and plan
                </h1>
                <p className="font-poppins text-slate-500 text-center mb-16 max-w-2xl mx-auto">
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
                                    : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl'
                            }`}
                        >
                            {plan.is_recommended && (
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[var(--color-accent)] text-[var(--color-navbar)] px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}

                            {/* Plan Name */}
                            <p className={`font-poppins text-[14px] font-bold mb-4 uppercase tracking-widest ${
                                plan.is_recommended ? 'text-[var(--color-accent)]' : 'text-slate-500'
                            }`}>
                                {plan.name}
                            </p>

                            {/* Price */}
                            <div className="flex flex-col mb-4">
                                <div className="flex items-baseline gap-1">
                                    <span className={`font-poppins text-[42px] font-bold ${
                                        plan.is_recommended ? 'text-white' : 'text-[var(--color-navbar)]'
                                    }`}>
                                        {plan.currency === 'USD' ? '$' : plan.currency}
                                        {plan.price || '00'} 
                                    </span>
                                    <span className={`font-poppins text-[16px] capitalize ${
                                        plan.is_recommended ? 'text-white/70' : 'text-slate-400'
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
                                plan.is_recommended ? 'text-white/80' : 'text-slate-500'
                            }`}>
                                {plan.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                                            plan.is_recommended ? 'bg-white/20' : 'bg-slate-100'
                                        }`}>
                                            <svg
                                                className={`w-3 h-3 ${plan.is_recommended ? 'text-white' : 'text-[var(--color-navbar)]'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className={`font-poppins text-[14px] ${
                                            plan.is_recommended ? 'text-white' : 'text-slate-700'
                                        }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button 
                                onClick={() => handleBuyNow(plan)}
                                className={`w-full py-3.5 font-poppins text-[14px] font-bold rounded-lg transition-all shadow-lg ${
                                    plan.is_recommended 
                                        ? 'bg-[var(--color-accent)] text-[var(--color-navbar)] hover:bg-yellow-400 shadow-[var(--color-accent)]/20'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Modal */}
            {showBookingModal && selectedPlan && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-navbar)]"></div>
                        
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[var(--color-navbar)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="font-poppins text-[24px] font-bold text-[var(--color-navbar)] mb-2">
                                Book a Service
                            </h3>
                            <p className="font-poppins text-[14px] text-slate-500">
                                Select a service for the <span className="font-bold text-[var(--color-navbar)]">{selectedPlan.name}</span> plan
                            </p>
                        </div>

                        {/* Service Selection */}
                        <div className="mb-6">
                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                Select a Service
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedServiceId}
                                    onChange={(e) => setSelectedServiceId(e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 appearance-none bg-white pr-10"
                                >
                                    <option value="">Choose a service...</option>
                                    {servicesData.map((service) => (
                                        <option key={service.id} value={service.id}>
                                            {service.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        {selectedServiceId && (
                            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-poppins text-[14px] text-slate-500">Service</span>
                                    <span className="font-poppins text-[14px] font-semibold text-slate-800">
                                        {servicesData.find(s => String(s.id) === selectedServiceId)?.name}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-poppins text-[14px] text-slate-500">Plan</span>
                                    <span className="font-poppins text-[14px] font-semibold text-slate-800">{selectedPlan.name}</span>
                                </div>
                                <div className="border-t border-slate-200 pt-3 mt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="font-poppins text-[16px] font-bold text-[var(--color-navbar)]">Total / {selectedPlan.billing_interval}</span>
                                        <span className="font-poppins text-[20px] font-bold text-[var(--color-navbar)]">
                                            {selectedPlan.currency === 'USD' ? '$' : selectedPlan.currency}{selectedPlan.price || '00'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => {
                                    setShowBookingModal(false)
                                    setSelectedPlan(null)
                                    setSelectedServiceId('')
                                }}
                                className="flex-1 px-6 py-3.5 border border-slate-200 text-slate-600 font-poppins text-[14px] font-bold rounded-lg hover:bg-slate-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleBookService}
                                disabled={!selectedServiceId}
                                className="flex-1 px-6 py-3.5 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-bold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-all shadow-lg shadow-[var(--color-navbar)]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Pricing

