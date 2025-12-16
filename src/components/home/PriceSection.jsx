import React from "react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Weekly",
        price: "$19",
        period: "/ month",
        popular: false,
        features: [
            "Full Access",
            "100 GB Free Storage",
            "Unlimited Visitors",
            "10 Agents",
            "Live Chat Support",
        ],
    },
    {
        name: "Monthly",
        price: "$49",
        period: "/ month",
        popular: true,
        features: [
            "Full Access",
            "100 GB Free Storage",
            "Unlimited Visitors",
            "10 Agents",
            "Live Chat Support",
        ],
    },
    {
        name: "Yearly",
        price: "$99",
        period: "/ month",
        popular: false,
        features: [
            "Full Access",
            "100 GB Free Storage",
            "Unlimited Visitors",
            "10 Agents",
            "Live Chat Support",
        ],
    },
];

const PriceSection = () => {
    return (
        <section className="bg-white px-4 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Pricing and plan
                </h2>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${plan.popular ? "bg-[#e7f1ff]" : ""
                                }`}
                        >
                            <div className="text-left space-y-1">
                                <div className="text-sm font-semibold text-slate-600">
                                    {plan.name}
                                </div>
                                <div className="flex items-baseline gap-1 text-4xl font-semibold text-slate-900">
                                    {plan.price}
                                    <span className="text-sm font-normal text-slate-500">
                                        {plan.period}
                                    </span>
                                </div>
                                <p className="mt-2 text-[11px] text-slate-600">
                                    All the basic features to boost your freelance career
                                </p>
                            </div>

                            <div className="my-6 h-px w-full bg-gray-200" />

                            <ul className="space-y-3 text-left text-sm text-slate-800">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <span className="inline-block h-2 w-2 rounded-full bg-slate-800" />
                                        <span className="text-[12px] text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Button
                                    variant={plan.popular ? "brand" : "outline"}
                                    className={`w-full ${plan.popular ? "" : "border-[var(--color-navbar)] text-[var(--color-navbar)] hover:bg-[var(--color-navbar)] hover:text-white"}`}
                                >
                                    Buy Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PriceSection;