import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqImg from "@/assets/faq.png";

const faqs = [
    {
        question: "How much do you charge for pedicure ?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using lorem Ipsum is that it has a more-or-less normal distribution",
    },
    {
        question: "What types of treatments do you offer?",
        answer: "",
    },
    {
        question: "How do i book my appointment ?",
        answer: "",
    },
    {
        question: "Can i cancel my appointment",
        answer: "",
    },
];

const FaqSection = () => {
    return (
        <section className="bg-white px-4 py-16">
            <div className="container mx-auto grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-[var(--color-navbar)] sm:text-3xl max-w-md">
                        Frequently Asked Questions
                    </h2>

                    <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={faq.question}
                                value={`item-${idx + 1}`}
                                className="overflow-hidden rounded-lg border border-[#b7d0ff] bg-[#cfe2ff]"
                            >
                                <AccordionTrigger className="rounded-none bg-[#cfe2ff] px-4 py-3 text-[13px] font-semibold text-slate-800 hover:no-underline hover:bg-[#cfe2ff] data-[state=open]:bg-[#cfe2ff] [&>svg]:text-slate-600">
                                    {faq.question}
                                </AccordionTrigger>
                                {faq.answer && (
                                    <AccordionContent className="border-t border-[#b7d0ff] bg-white px-4 py-3 text-[12px] text-slate-600 leading-relaxed">
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