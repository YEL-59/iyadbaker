import React from "react";
import crmImg from "@/assets/crm.png";

const CrmSection = () => {
    return (
        <section className="bg-white px-4 py-16">
            <div className="container mx-auto grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4 text-left">
                    <h2 className="text-3xl font-bold leading-snug text-[var(--color-navbar)] sm:text-4xl">
                        Why You Need a CRM Like Leadsnsaas
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        Running a service business is demanding—managing technicians, scheduling jobs, handling payments, keeping customers happy, and staying profitable all require precision and efficiency. Without the right system, these challenges can quickly become overwhelming, leading to missed opportunities, higher costs, and unnecessary stress.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        A good CRM is more than just a management tool—it's the backbone of an efficient, organized, and scalable business. It helps you streamline performance, strengthen customer relationships, and ensure smooth day-to-day operations, all within a single, easy-to-use platform.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        But SimplyPrime takes it further. With AI-powered automation, it keeps your business running smoothly—from scheduling to customer satisfaction and earning more 5-star Google reviews. By reducing manual tasks and optimizing workflows, it helps you grow faster and increase profitability effortlessly.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        In today's fast-paced world, a CRM isn't just a convenience—it's a necessity for businesses that want to scale efficiently, increase profitability, and deliver exceptional service without the daily chaos. If you're looking for a smarter way to run your business, SimplyPrime CRM is built to help you succeed. We've leveraged 27 years of industry experience to create a CRM solution that helps you navigate these challenges effectively.
                    </p>
                </div>

                <div className="flex justify-center">
                    <img
                        src={crmImg}
                        alt="Professional using a CRM at the office"
                        className="w-full max-w-2xl rounded-2xl object-cover shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default CrmSection;