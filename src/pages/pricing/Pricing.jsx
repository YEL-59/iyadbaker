import React from 'react'

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
                            {plan.featured && (
                                <button className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[14px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                                    Buy Now
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing

