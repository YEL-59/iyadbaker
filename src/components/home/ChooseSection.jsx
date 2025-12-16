import React from "react";
import heroImg from "@/assets/hero-img.png";

const highlights = [
    {
        title: "Data-Driven Targeting",
        description:
            "Our strategies are built on deep market research, advanced analytics, and customer insights — ensuring we reach the exact people most likely to convert.",
    },
    {
        title: "High-Quality, Verified Leads",
        description:
            "Every lead goes through a strict verification process using both tools and human review, so you only receive accurate, relevant, and sales-ready prospects.",
    },
    {
        title: "Proven Multi-Channel Outreach",
        description:
            "From email and LinkedIn to retargeting ads and automation, we engage prospects across multiple touchpoints to maximize response rates and conversions.",
    },
    {
        title: "Transparent Reporting & Insights",
        description:
            "You get clear, weekly reports with metrics, performance insights, and recommendations — giving you full visibility into what’s driving results.",
    },
    {
        title: "Dedicated Growth Partner",
        description:
            "We don’t just run campaigns; we work as an extension of your team, optimizing continuously to help you scale your pipeline and achieve long-term growth.",
    },
];

const ChooseSection = () => {
    return (
        <section className="bg-white px-4 py-16">
            <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex justify-center">
                    <img
                        src={heroImg}
                        alt="Team handshake"
                        className="h-full max-h-[380px] w-full max-w-xl rounded-2xl object-cover shadow-2xl"
                    />
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[var(--color-navbar)] sm:text-3xl">
                        Why Choose Us
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        Running a service business is demanding—managing technicians, scheduling jobs,
                        handling payments, keeping customers happy, and staying profitable all require precision and efficiency.
                    </p>

                    <div className="space-y-4">
                        {highlights.map((item) => (
                            <div key={item.title} className="space-y-1.5">
                                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                                    {item.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseSection;