import React from "react";
import { useWhyChooseUs } from "@/hook/home.hook";

const ChooseSection = () => {
  const { data: response, isLoading } = useWhyChooseUs();
  const content = response?.data;

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center bg-white">
        <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="bg-background transition-colors duration-300 px-4">
      <div className="container mx-auto grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex justify-start items-start py-5 md:py-20">
          <img
            src={content?.image || "@/assets/hero-img.png"}
            alt="Why Choose Us"
            className="h-full max-h-[480px] w-full  rounded-2xl object-cover shadow-2xl"
          />
        </div>

        <div className="px-3 md:px-0">
          <div
            className="prose-premium"
            dangerouslySetInnerHTML={{ __html: content?.description }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
