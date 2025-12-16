import React from "react";
import Havac from "@/assets/svg/havac";
import Constraction from "@/assets/svg/constraction";
import Insurance from "@/assets/svg/insurance";
import Lawfarm from "@/assets/svg/lawfarm";
import RealEstate from "@/assets/svg/realestate";

const services = [
    {
        title: "HVAC Leads",
        description: "Homeowners actively looking for heating & cooling professionals.",
        Icon: Havac,
    },
    {
        title: "Construction Leads",
        description: "Real residential and commercial clients ready for bids.",
        Icon: Constraction,
    },
    {
        title: "Insurance Leads",
        description: "Warm prospects looking for coverage options.",
        Icon: Insurance,
    },
    {
        title: "Real Estate Leads",
        description: "Buyers, sellers, and investors looking to move fast.",
        Icon: RealEstate,
    },
    {
        title: "Law Firm Leads",
        description: "Buyers, sellers, and investors looking to move fast.",
        Icon: Lawfarm,
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-[#e7f1ff] px-4 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Our Lead Generation Services
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ title, description, Icon }) => (
                        <div
                            key={title}
                            className="flex h-full flex-col rounded-lg bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-6 text-[var(--color-navbar)]">
                                <Icon />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                                {description}
                            </p>
                            <button className="mt-4 inline-flex items-center text-[11px] font-semibold text-[var(--color-navbar)] transition hover:opacity-80">
                                Read More <span className="ml-1 text-lg leading-none">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;