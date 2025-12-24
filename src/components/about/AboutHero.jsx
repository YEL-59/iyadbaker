import React from 'react'
import { useAboutServiceBenefits } from '@/hook/about.hook'

const AboutHero = () => {
    const { data: response, isLoading } = useAboutServiceBenefits()
    const content = response?.data

    if (isLoading) {
        return (
            <div className="py-20 flex justify-center items-center">
                <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <section className="bg-background py-16 px-4 transition-colors duration-300">
            <div className="container mx-auto">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    {/* Image */}
                    <div>
                        <img
                            src={content?.image || '@/assets/faq.png'}
                            alt="About us"
                            className="w-full max-w-full aspect-[652/458] rounded-xl object-cover shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        {/* Render HTML content from API with prose styling */}
                        <div 
                            className="prose-premium prose-h2:text-[28px] prose-ul:grid prose-ul:grid-cols-2 prose-ul:gap-4 prose-ul:list-none prose-ul:p-0 prose-li:border-l-2 prose-li:border-slate-300 dark:prose-li:border-slate-700 prose-li:pl-3 prose-li:font-normal"
                            dangerouslySetInnerHTML={{ __html: content?.description }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero