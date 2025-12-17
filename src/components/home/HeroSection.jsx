import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import heroImg from "@/assets/hero-img.png";
import Trading from "@/assets/svg/trading";

const HeroSection = () => {
    return (
        <section className="bg-[#e7f1ff] px-4 pt-12 ">
            <div className="container mx-auto flex  flex-col items-center gap-10 md:flex-row md:gap-12">
                {/* Left content */}
                <div className="w-full md:w-1/2">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold leading-tight text-[var(--color-navbar)] sm:text-4xl md:text-5xl max-w-xl">
                                Fuel Your Business Growth with High-Quality Leads
                            </h1>
                            <p className="max-w-sm text-sm text-slate-600 sm:text-base leading-relaxed">
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
                                className="bg-transparent text-[var(--color-accent)] ring-1 ring-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-navbar)]"
                            >
                                Services
                            </Button>
                        </div>

                        <div className="flex flex-wrap justify-start  gap-3 max-w-xl">
                            <div className="pt-4 text-xs font-semibold text-slate-600 max-w-[140px]">
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
                </div>

                {/* Right content */}
                <div className=" w-full flex gap-5 md:w-1/2">
                    <div className="relative flex items-end justify-center">
                        <img
                            src={heroImg}
                            alt="Happy customer holding laptop"
                            className=" max-h-[420px] w-full max-w-[480px] object-contain drop-shadow-xl"
                        />
                    </div>
                    <div className="">
                        <div className="  w-44 rounded-2xl bg-white p-3 text-xs shadow-xl sm:right-4 sm:top-3 sm:w-48">
                            <div className="font-semibold text-slate-800">Bill Adams</div>
                            <div className="text-[10px] text-slate-500">CEO UpTech</div>
                            <div className="mt-2 text-[10px] leading-relaxed text-slate-600">
                                “The team is really the best in the field. I don’t regret working with
                                them, and I will come back again thanks”
                            </div>
                        </div>

                        <div className="flex justify-end items-end">
                            {/*  make a round border with border-2 border-gray-300 */}
                            <div className="w-20 h-20  rounded-full border-2 border-gray-300  bg-[var(--color-navbar)] flex items-center justify-center">
                                <span className="text-2xl font-bold text-white"><Trading /></span>
                            </div>

                        </div>
                        <Card className="flex h-32 w-36 flex-col items-center justify-center rounded-2xl border-0 bg-white text-center shadow-xl sm:right-8 sm:bottom-0">
                            <CardHeader className="p-0">
                                <CardTitle className="text-3xl font-semibold text-[var(--color-navbar)]">
                                    230+
                                </CardTitle>
                                <CardDescription className="mt-1 w-28 text-[10px] text-slate-600 text-center">
                                    Some big companies that we have worked with, and trust us very much
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="w-full px-5">
                                <Progress value={70} className="h-1 bg-gray-300" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;