import React from "react";
import { useAboutOurStory } from "@/hook/about.hook";

const AboutStory = () => {
  const { data: response, isLoading } = useAboutOurStory();
  const content = response?.data;

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center bg-[#E8F1FD] dark:bg-slate-950/20">
        <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="bg-[#E8F1FD] dark:bg-slate-900/50 py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Content */}
          <div className=" max-w-4xl">
            {/* Render HTML content from API with prose styling */}
            <div
              className="prose-premium"
              dangerouslySetInnerHTML={{ __html: content?.description }}
            />
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={content?.image || "@/assets/faq.png"}
              alt="Our story"
              className="w-full max-w-full aspect-[652/458] rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
