import React from 'react'
import { useParams, Link } from 'react-router'
import { getServiceBySlug } from '@/data/servicesData'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ServiceDetails = () => {
    const { slug } = useParams()
    const service = getServiceBySlug(slug)

    // Handle service not found
    if (!service) {
        return (
            <section className="bg-white py-16 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="font-poppins text-[36px] font-bold text-[var(--color-navbar)] mb-4">
                        Service Not Found
                    </h1>
                    <p className="text-slate-600 mb-6">The service you're looking for doesn't exist.</p>
                    <Link
                        to="/services"
                        className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-navbar)] font-semibold rounded-lg"
                    >
                        Back to Services
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-[var(--color-navbar)]/80 z-10"></div>
                <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container mx-auto px-4">
                        <h1 className="font-poppins text-[42px] font-bold text-white">
                            {service.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Detail Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl">
                        <h2 className="font-poppins text-[32px] font-bold leading-[1.2] text-[var(--color-navbar)] mb-6">
                            {service.detailSection.heading}
                        </h2>
                        <p className="font-poppins text-[16px] font-normal leading-[28px] text-slate-600 mb-8">
                            {service.detailSection.description}
                        </p>
                        <button className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[14px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* What You Get Section */}
            <section className="py-16 px-4 bg-[#E8F1FD]">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <img
                                src={service.whatYouGet.image}
                                alt="What you get"
                                className="w-full max-w-full aspect-[652/458] rounded-[14px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="flex-1 space-y-5">
                            <h3 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)]">
                                {service.whatYouGet.title}
                            </h3>
                            <ul className="space-y-3">
                                {service.whatYouGet.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600 flex items-start gap-3"
                                    >
                                        <span className="text-[var(--color-accent)] mt-1">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="font-poppins text-[32px] font-bold text-[var(--color-navbar)] text-center mb-16">
                        How It Works
                    </h2>

                    {/* Desktop Stepper */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-4 gap-6">
                            {service.howItWorks.map((step, idx) => (
                                <div key={idx} className="relative flex flex-col items-center">
                                    {/* Step Label */}
                                    <p className="font-poppins text-[13px] font-medium text-slate-400 mb-4">
                                        {step.step}
                                    </p>

                                    {/* Dot with connecting line */}
                                    <div className="relative w-full flex justify-center mb-6">
                                        {/* Connecting Line - Left (Dashed) */}
                                        {idx !== 0 && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 border-t-2 border-dashed border-slate-300"></div>
                                        )}
                                        {/* Connecting Line - Right (Dashed) */}
                                        {idx !== service.howItWorks.length - 1 && (
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 border-t-2 border-dashed border-slate-300"></div>
                                        )}
                                        {/* Dot */}
                                        <div className="relative z-10 w-4 h-4 rounded-full bg-[var(--color-navbar)] shadow-lg shadow-[var(--color-navbar)]/30"></div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-poppins text-[15px] font-bold text-[var(--color-navbar)] text-center mb-2">
                                        {step.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="font-poppins text-[13px] font-normal leading-[20px] text-slate-500 text-center max-w-[200px]">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Stepper */}
                    <div className="md:hidden space-y-8">
                        {service.howItWorks.map((step, idx) => (
                            <div key={idx} className="flex gap-4">
                                {/* Left side - dot and line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-[var(--color-navbar)] shadow-lg shadow-[var(--color-navbar)]/30"></div>
                                    {idx !== service.howItWorks.length - 1 && (
                                        <div className="flex-1 border-l-2 border-dashed border-slate-300 mt-2"></div>
                                    )}
                                </div>

                                {/* Right side - content */}
                                <div className="flex-1 pb-4">
                                    <p className="font-poppins text-[12px] font-medium text-slate-400 mb-1">
                                        {step.step}
                                    </p>
                                    <h4 className="font-poppins text-[15px] font-bold text-[var(--color-navbar)] mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="font-poppins text-[13px] font-normal leading-[20px] text-slate-500">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-[#F8FAFC]">
                <div className="container mx-auto">
                    <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="space-y-6">
                            <h2 className="font-poppins text-[32px] font-bold text-[var(--color-navbar)]">
                                Frequently Asked Questions
                            </h2>

                            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3 max-w-2xl">
                                {service.faqs.map((faq, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        value={`item-${idx + 1}`}
                                        className="overflow-hidden rounded-lg border border-[#b7d0ff] bg-[#cfe2ff]"
                                    >
                                        <AccordionTrigger className="rounded-none bg-[#cfe2ff] px-4 py-3 text-[13px] font-semibold text-slate-800 hover:no-underline hover:bg-[#cfe2ff] data-[state=open]:bg-[#cfe2ff] [&>svg]:text-slate-600">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="border-t border-[#b7d0ff] bg-white px-4 py-3 text-[12px] text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src={service.detailSection.image}
                                alt="FAQ"
                                className="w-full max-w-full aspect-[652/458] rounded-[14px] object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceDetails

