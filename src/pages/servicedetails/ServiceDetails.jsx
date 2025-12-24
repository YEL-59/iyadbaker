import React from 'react'
import { useParams, Link } from 'react-router'
import { useServiceDetails } from '@/hook/service.hook'
import { useFaqs } from '@/hook/home.hook'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ServiceDetails = () => {
    const { id } = useParams()
    const { data: response, isLoading: detailsLoading, isError } = useServiceDetails(id)
    const service = response?.data

    const { data: faqResponse, isLoading: faqsLoading } = useFaqs({ lead_service_id: id })
    const faqs = faqResponse?.data?.data || []

    if (detailsLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-navbar)]"></div>
            </div>
        )
    }

    // Handle service not found or error
    if (isError || !service) {
        return (
            <section className="bg-background py-16 px-4 transition-colors duration-300">
                <div className="container mx-auto text-center">
                    <h1 className="font-poppins text-[36px] font-bold text-slate-800 dark:text-white mb-4">
                        Service Not Found
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">The service you're looking for doesn't exist or failed to load.</p>
                    <Link
                        to="/services"
                        className="px-6 py-3 bg-[var(--color-accent)] text-slate-900 font-semibold rounded-lg"
                    >
                        Back to Services
                    </Link>
                </div>
            </section>
        )
    }

    const whatYouGet = service.what_you_get?.[0] || null
    const howItWorks = service.how_it_works || []

    return (
        <div className="bg-background transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative h-[300px]">
                <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container mx-auto px-4">
                        <h1 className="font-poppins text-[32px] md:text-[42px] font-bold text-white max-w-2xl drop-shadow-lg">
                            {service.name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Detail Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl">
                        <h2 className="font-poppins text-[32px] font-bold leading-[1.2] text-slate-900 dark:text-white mb-6">
                            About {service.name}
                        </h2>
                        <div 
                            className="font-poppins text-[16px] font-normal leading-[28px] text-slate-600 dark:text-slate-400 mb-8 prose prose-slate dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: service.description }}
                        />
                        <button className="px-8 py-3 bg-[var(--color-accent)] text-slate-900 font-poppins text-[14px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* What You Get Section */}
            {whatYouGet && (
                <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/50">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1">
                                <img
                                    src={whatYouGet.image || service.image}
                                    alt="What you get"
                                    className="w-full max-w-full aspect-[652/458] rounded-[14px] object-cover shadow-lg dark:shadow-slate-950/50"
                                />
                            </div>
                            <div className="flex-1 space-y-5">
                                <div 
                                    className="prose prose-slate dark:prose-invert max-w-none prose-ul:list-disc prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-headings:text-slate-900 dark:prose-headings:text-white"
                                    dangerouslySetInnerHTML={{ __html: whatYouGet.text }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* How It Works Section */}
            {howItWorks.length > 0 && (
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="font-poppins text-[32px] font-bold text-slate-800 dark:text-white text-center mb-16">
                            How It Works
                        </h2>

                        {/* Desktop Stepper */}
                        <div className="hidden md:block">
                            <div className="grid grid-cols-4 gap-6">
                                {howItWorks.map((step, idx) => (
                                    <div key={idx} className="relative flex flex-col items-center">
                                        {/* Step Label */}
                                        <p className="font-poppins text-[13px] font-medium text-slate-400 dark:text-slate-500 mb-4">
                                            Step {String(idx + 1).padStart(2, '0')}
                                        </p>

                                        {/* Dot with connecting line */}
                                        <div className="relative w-full flex justify-center mb-6">
                                            {/* Connecting Line - Left (Dashed) */}
                                            {idx !== 0 && (
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 border-t-2 border-dashed border-slate-200 dark:border-slate-800"></div>
                                            )}
                                            {/* Connecting Line - Right (Dashed) */}
                                            {idx !== howItWorks.length - 1 && (
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 border-t-2 border-dashed border-slate-200 dark:border-slate-800"></div>
                                            )}
                                            {/* Dot */}
                                            <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30"></div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="font-poppins text-[15px] font-bold text-slate-800 dark:text-white text-center mb-2">
                                            {step.name}
                                        </h4>

                                        {/* Description */}
                                        <p className="font-poppins text-[13px] font-normal leading-[20px] text-slate-500 dark:text-slate-400 text-center max-w-[200px]">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Stepper */}
                        <div className="md:hidden space-y-8">
                            {howItWorks.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    {/* Left side - dot and line */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30"></div>
                                        {idx !== howItWorks.length - 1 && (
                                            <div className="flex-1 border-l-2 border-dashed border-slate-200 dark:border-slate-800 mt-2"></div>
                                        )}
                                    </div>

                                    {/* Right side - content */}
                                    <div className="flex-1 pb-4">
                                        <p className="font-poppins text-[12px] font-medium text-slate-400 dark:text-slate-500 mb-1">
                                            Step {String(idx + 1).padStart(2, '0')}
                                        </p>
                                        <h4 className="font-poppins text-[15px] font-bold text-slate-800 dark:text-white mb-1">
                                            {step.name}
                                        </h4>
                                        <p className="font-poppins text-[13px] font-normal leading-[20px] text-slate-500 dark:text-slate-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30">
                    <div className="container mx-auto">
                        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="space-y-6">
                                <h2 className="font-poppins text-[32px] font-bold text-slate-800 dark:text-white">
                                    Frequently Asked Questions
                                </h2>

                                <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3 max-w-2xl">
                                    {faqs.map((faq, idx) => (
                                        <AccordionItem
                                            key={faq.id}
                                            value={`item-${idx + 1}`}
                                            className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                                        >
                                            <AccordionTrigger className="rounded-none bg-slate-50 dark:bg-slate-800/50 px-4 py-3 text-[13px] font-semibold text-slate-800 dark:text-slate-200 hover:no-underline text-left transition-colors">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src={service.image}
                                    alt="FAQ"
                                    className="w-full max-w-full aspect-[652/458] rounded-[14px] object-cover shadow-xl dark:shadow-slate-950/50"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default ServiceDetails

