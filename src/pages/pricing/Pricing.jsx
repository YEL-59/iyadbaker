import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { servicesData } from '@/data/servicesData'

// Pricing data - like API response
const pricingPlans = [
    {
        id: 1,
        name: "Weekly",
        price: 19,
        period: "month",
        description: "All the basic features to boost your freelance career",
        featured: false,
        features: [
            { name: "Full Access", included: true },
            { name: "100 GB Free Storage", included: true },
            { name: "Unlimited Visitors", included: false },
            { name: "10 Agents", included: false },
            { name: "Live Chat Support", included: true },
        ]
    },
    {
        id: 2,
        name: "Monthly",
        price: 49,
        period: "month",
        description: "All the basic features to boost your freelance career",
        featured: true,
        features: [
            { name: "Full Access", included: true },
            { name: "100 GB Free Storage", included: true },
            { name: "Unlimited Visitors", included: true },
            { name: "10 Agents", included: true },
            { name: "Live Chat Support", included: true },
        ]
    },
    {
        id: 3,
        name: "Yearly",
        price: 99,
        period: "month",
        description: "All the basic features to boost your freelance career",
        featured: false,
        features: [
            { name: "Full Access", included: true },
            { name: "100 GB Free Storage", included: true },
            { name: "Unlimited Visitors", included: true },
            { name: "10 Agents", included: true },
            { name: "Live Chat Support", included: true },
        ]
    },
]

const Pricing = () => {
    const navigate = useNavigate()
    const [showBookingModal, setShowBookingModal] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [selectedService, setSelectedService] = useState('')

    const handleBuyNow = (plan) => {
        // Always allow booking with fake user
        setSelectedPlan(plan)
        setShowBookingModal(true)
    }

    const handleBookService = () => {
        if (!selectedService) return

        const newBooking = {
            id: Date.now().toString(),
            serviceSlug: selectedService,
            plan: selectedPlan.name,
            price: selectedPlan.price,
            status: 'pending',
            createdAt: new Date().toISOString()
        }

        // Save to localStorage
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]))

        setShowBookingModal(false)
        setSelectedPlan(null)
        setSelectedService('')
        navigate('/my-bookings')
    }

    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="font-poppins text-[40px] font-bold text-[var(--color-navbar)] text-center mb-16">
                    Pricing and plan
                </h1>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-2xl p-8 transition-all duration-300 ${
                                plan.featured
                                    ? 'bg-[var(--color-navbar)] text-white shadow-2xl shadow-[var(--color-navbar)]/30 scale-105 z-10'
                                    : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl'
                            }`}
                        >
                            {/* Plan Name */}
                            <p className={`font-poppins text-[14px] font-medium mb-4 ${
                                plan.featured ? 'text-white/80' : 'text-slate-500'
                            }`}>
                                {plan.name}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className={`font-poppins text-[48px] font-bold ${
                                    plan.featured ? 'text-white' : 'text-[var(--color-navbar)]'
                                }`}>
                                    ${plan.price}
                                </span>
                                <span className={`font-poppins text-[16px] ${
                                    plan.featured ? 'text-white/70' : 'text-slate-400'
                                }`}>
                                    / {plan.period}
                                </span>
                            </div>

                            {/* Description */}
                            <p className={`font-poppins text-[14px] leading-[22px] mb-8 ${
                                plan.featured ? 'text-white/80' : 'text-slate-500'
                            }`}>
                                {plan.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        {/* Check/X Icon */}
                                        {feature.included ? (
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                                plan.featured ? 'bg-white/20' : 'bg-slate-100'
                                            }`}>
                                                <svg
                                                    className={`w-3 h-3 ${plan.featured ? 'text-white' : 'text-[var(--color-navbar)]'}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
                                                <svg
                                                    className="w-3 h-3 text-slate-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        )}
                                        <span className={`font-poppins text-[14px] ${
                                            plan.featured
                                                ? 'text-white'
                                                : feature.included ? 'text-slate-700' : 'text-slate-400'
                                        }`}>
                                            {feature.name}
                                        </span>
                                        {/* Info Icon */}
                                        <svg
                                            className={`w-4 h-4 ml-auto ${
                                                plan.featured ? 'text-white/50' : 'text-slate-300'
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                                            <path strokeLinecap="round" strokeWidth="1.5" d="M12 16v-4m0-4h.01" />
                                        </svg>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button 
                                onClick={() => handleBuyNow(plan)}
                                className={`w-full py-3 font-poppins text-[14px] font-semibold rounded-lg transition-colors ${
                                    plan.featured 
                                        ? 'bg-[var(--color-accent)] text-[var(--color-navbar)] hover:bg-yellow-400'
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
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[var(--color-navbar)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="font-poppins text-[24px] font-bold text-[var(--color-navbar)] mb-2">
                                Book a Service
                            </h3>
                            <p className="font-poppins text-[14px] text-slate-500">
                                Select a service for the {selectedPlan.name} plan (${selectedPlan.price}/mo)
                            </p>
                        </div>

                        {/* Service Selection */}
                        <div className="mb-6">
                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                Select a Service
                            </label>
                            <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 appearance-none bg-white"
                            >
                                <option value="">Choose a service...</option>
                                {servicesData.map((service) => (
                                    <option key={service.id} value={service.slug}>
                                        {service.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Summary */}
                        {selectedService && (
                            <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-poppins text-[14px] text-slate-600">Service</span>
                                    <span className="font-poppins text-[14px] font-semibold text-slate-800">
                                        {servicesData.find(s => s.slug === selectedService)?.title}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-poppins text-[14px] text-slate-600">Plan</span>
                                    <span className="font-poppins text-[14px] font-semibold text-slate-800">{selectedPlan.name}</span>
                                </div>
                                <div className="border-t border-slate-200 pt-2 mt-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-poppins text-[16px] font-bold text-[var(--color-navbar)]">Total</span>
                                        <span className="font-poppins text-[20px] font-bold text-[var(--color-navbar)]">${selectedPlan.price}/mo</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowBookingModal(false)
                                    setSelectedPlan(null)
                                    setSelectedService('')
                                }}
                                className="flex-1 px-6 py-3 border border-slate-200 text-slate-700 font-poppins text-[14px] font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleBookService}
                                disabled={!selectedService}
                                className="flex-1 px-6 py-3 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Book Service
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Pricing

