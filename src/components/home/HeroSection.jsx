import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useHero } from "@/hook/home.hook";
import Trading from "@/assets/svg/trading";

const HeroSection = () => {
  const { data: response, isLoading } = useHero();
  const heroData = response?.data?.[0];

  if (isLoading) {
    return (
      <div className="py-24 flex justify-center items-center bg-[#e7f1ff] dark:bg-slate-950/20">
        <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!heroData) return null;

  return (
    <section className="bg-[#e7f1ff] dark:bg-slate-950/20 px-4 pt-12 transition-colors duration-300">
      <div className="container mx-auto flex flex-col items-center gap-10 md:flex-row md:gap-12">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-poppins text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl max-w-xl">
                {heroData.title}
              </h1>
              <p className="max-w-sm font-poppins text-sm text-slate-600 dark:text-slate-400 sm:text-base leading-relaxed">
                {heroData.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to={heroData.link_url || "/get-started"}>
                <Button variant="brand" size="lg">
                  {heroData.button_text}
                </Button>
              </Link>
              <Link to={heroData.link_url_second || "/services"}>
                <Button
                  variant="brand"
                  size="lg"
                  className="bg-transparent text-[var(--color-accent)] ring-1 ring-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-navbar)]"
                >
                  {heroData.button_text_second}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="w-full flex gap-5 md:w-1/2 ">
          <div className="relative flex items-end justify-center ">
            <img
              src={heroData.background_image}
              alt="Hero Visualization"
              className="max-h-[420px] w-full max-w-[480px] object-contain drop-shadow-xl transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-4 hidden md:block">
            <div className="w-44 rounded-2xl bg-white dark:bg-slate-900 p-4 text-xs shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="font-semibold text-slate-800 dark:text-white">
                Bill Adams
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                CEO UpTech
              </div>
              <div className="mt-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-400">
                “The team is really the best in the field. I don’t regret
                working with them, and I will come back again thanks”
              </div>
            </div>

            <div className="flex justify-end items-end">
              <div className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-[var(--color-navbar)] flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">
                  <Trading />
                </span>
              </div>
            </div>

            <Card className="flex h-36 w-40 flex-col items-center justify-center rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-center shadow-xl">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl font-semibold text-[var(--color-navbar)] dark:text-[var(--color-accent)]">
                  230+
                </CardTitle>
                <CardDescription className="mt-1 w-32 text-[10px] text-slate-600 dark:text-slate-400 text-center">
                  Some big companies that we have worked with, and trust us very
                  much
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full px-5 mt-3">
                <Progress
                  value={70}
                  className="h-1 bg-slate-100 dark:bg-slate-800"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
