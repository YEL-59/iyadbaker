import React from "react";

const stats = [
    {
        value: "1.67x",
        title: "Impressive Performance",
        subtitle: "Another way to grow fast",
    },
    {
        value: "29%",
        title: "Customer Retention",
        subtitle: "On your website",
    },
    {
        value: "19%",
        title: "Extra Growth Revenue",
        subtitle: "From your sales",
    },
];

const Performance = () => {
    return (
        <section className="bg-[#e7f1ff] dark:bg-slate-950/20 px-4 py-14 transition-colors duration-300">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl leading-tight">
                    Start building high performing website &<br className="hidden sm:block" />
                    grow your business fast.
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.title} className="space-y-1">
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                            <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                                {stat.title}
                            </div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">{stat.subtitle}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Performance;