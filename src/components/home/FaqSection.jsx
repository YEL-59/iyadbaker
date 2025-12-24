import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqImg from "@/assets/faq.png";
import { useFaqs } from "@/hook/home.hook";

const FaqSection = () => {
    const { data: response, isLoading } = useFaqs({ per_page: 50 });
    const faqs = response?.data?.data || [];

    if (isLoading) {
        return (
            <div className="py-20 flex justify-center items-center bg-background">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <section className="bg-background px-4 py-16 transition-colors duration-300">
            <div className="container mx-auto grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl max-w-md">
                        Frequently Asked Questions
                    </h2>

                    <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={faq.id}
                                value={`item-${idx + 1}`}
                                className="overflow-hidden rounded-lg border border-[#b7d0ff] dark:border-slate-800 bg-[#cfe2ff] dark:bg-slate-900"
                            >
                                <AccordionTrigger className="rounded-none bg-[#cfe2ff] dark:bg-slate-900 px-4 py-3 text-[13px] font-semibold text-slate-800 dark:text-slate-200 hover:no-underline hover:bg-[#cfe2ff] dark:hover:bg-slate-800 data-[state=open]:bg-[#cfe2ff] dark:data-[state=open]:bg-slate-800 [&>svg]:text-slate-600 dark:[&>svg]:text-slate-400 text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                {faq.answer && (
                                    <AccordionContent className="border-t border-[#b7d0ff] dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="flex justify-center">
                    <img
                        src={faqImg}
                        alt="Team answering customer questions"
                        className="w-full max-w-xl rounded-xl object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default FaqSection;