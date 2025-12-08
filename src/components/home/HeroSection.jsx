import React from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-img.png";

const HeroSection = () => {
    return (
        <section className="bg-[#e7f1ff] px-4 py-12 sm:py-16 md:py-20">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-12">
                {/* Left content */}
                <div className="w-full md:w-1/2">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold leading-tight text-[var(--color-navbar)] sm:text-4xl md:text-5xl">
                                Fuel Your Business Growth with High-Quality Leads
                            </h1>
                            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                                Targeted prospects delivered straight to your pipeline — faster,
                                predictable, and scalable.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Button variant="brand" size="lg">
                                Get Started
                            </Button>
                            <Button
                                variant="brand"
                                size="lg"
                                className="bg-transparent text-[var(--color-accent)] ring-0 hover:bg-[var(--color-accent)] hover:text-[var(--color-navbar)]"
                            >
                                Services
                            </Button>
                        </div>

                        <div className="pt-4 text-xs font-semibold text-slate-600">
                            Trusted by the world&apos;s biggest brands
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:gap-6">
                            {["afterpay", "basecamp", "maze", "bytedance"].map((brand) => (
                                <span
                                    key={brand}
                                    className="rounded-full bg-white px-3 py-1 shadow-sm"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right content */}
                <div className="relative w-full md:w-1/2">
                    <div className="relative flex justify-center">
                        <img
                            src={heroImg}
                            alt="Happy customer holding laptop"
                            className="max-h-[380px] w-full max-w-[420px] object-contain drop-shadow-lg"
                        />
                    </div>
                    <div className="absolute right-2 top-4 w-40 rounded-2xl bg-white p-3 text-xs shadow-lg sm:right-6">
                        <div className="font-semibold text-slate-800">Bill Adams</div>
                        <div className="text-[10px] text-slate-500">CEO UpTech</div>
                        <div className="mt-2 text-[10px] leading-relaxed text-slate-600">
                            “The team is really the best in the field. I don’t regret working with
                            them, and I will come back again thanks”
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-4 flex h-28 w-28 flex-col items-center justify-center rounded-2xl bg-white text-center shadow-lg sm:right-10">
                        <div className="text-3xl font-semibold text-[var(--color-navbar)]">
                            230+
                        </div>
                        <div className="mt-1 w-24 text-[10px] text-slate-600">
                            Some big companies that we have worked with, and trust us very much
                        </div>
                        <div className="mt-2 h-1 w-10 rounded-full bg-[var(--color-navbar)]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;