import React, { useMemo } from "react";
import { useAboutServiceBenefits } from "@/hook/about.hook";

const AboutHero = () => {
  const { data: response, isLoading } = useAboutServiceBenefits();
  const content = response?.data;

  // Parse HTML and extract heading, description, and stats from table
  const parsedContent = useMemo(() => {
    if (!content?.description)
      return { heading: "", description: "", stats: [] };

    const parser = new DOMParser();
    const doc = parser.parseFromString(content.description, "text/html");

    const heading = doc.querySelector("h2")?.textContent || "";
    const firstParagraph = doc.querySelector("p")?.textContent || "";

    // Extract stats from table cells
    const stats = [];
    const tableCells = Array.from(doc.querySelectorAll("table tbody tr td"));

    for (const cell of tableCells) {
      const paragraphs = Array.from(cell.querySelectorAll("p"));
      if (paragraphs.length >= 2) {
        const number =
          paragraphs[0]?.querySelector("strong")?.textContent || "";
        const description = paragraphs[1]?.textContent || "";

        if (number && description) {
          stats.push({ number, description });
        }
      }
    }

    return { heading, description: firstParagraph, stats };
  }, [content?.description]);

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={content?.image || "@/assets/faq.png"}
              alt="About us"
              className="w-full max-w-full aspect-[652/458] rounded-lg sm:rounded-xl object-cover shadow-lg transition-shadow duration-300 hover:shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
              {parsedContent.heading}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
              {parsedContent.description}
            </p>

            {/* Stats Grid */}
            {parsedContent.stats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {parsedContent.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-1 sm:gap-2 py-3 sm:py-4 px-3 sm:px-4 border-l-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)] rounded-lg bg-slate-50/50 dark:bg-slate-900/30 transition-all duration-300"
                  >
                    <div className="text-lg sm:text-xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
