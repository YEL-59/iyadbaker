import React from "react";
import { useServiceBenefits } from "@/hook/home.hook";

const CrmSection = () => {
    const { data: response, isLoading } = useServiceBenefits();
    const content = response?.data;

    if (isLoading) {
        return (
            <div className="py-20 flex justify-center items-center bg-background">
                <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!content) return null;

    return (
        <section className="bg-background px-4 py-10 transition-colors duration-300">
            <div className="container mx-auto grid justify-center items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div 
                    className="prose-premium prose-h2:leading-snug prose-h2:sm:text-3xl"
                    dangerouslySetInnerHTML={{ __html: content.description }}
                />

                <div className="flex justify-center">
                    <img
                        src={content.image}
                        alt="Service Benefits"
                        className="w-full max-w-2xl rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>
            </div>
        </section>
    );
};

export default CrmSection;
