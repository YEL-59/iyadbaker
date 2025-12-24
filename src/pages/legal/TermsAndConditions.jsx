import React from 'react'
import { useTermsAndConditions } from '@/hook/content.hook'

const TermsAndConditions = () => {
    const { data: termsResponse, isLoading, isError } = useTermsAndConditions()
    const termsData = termsResponse?.data

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-navbar)]"></div>
            </div>
        )
    }

    if (isError || !termsData) {
        return (
            <div className="text-center py-20 text-red-500 font-poppins">
                Failed to load terms and conditions. Please try again later.
            </div>
        )
    }

    // Determine if data is a list or a single object
    const isList = Array.isArray(termsData)

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-[var(--color-navbar)] py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-poppins text-[40px] font-bold text-white text-center">
                        {isList ? "Terms and condition" : termsData.title || "Terms and condition"}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-10">
                        {isList ? (
                            termsData.map((section) => (
                                <div key={section.id} className="space-y-4">
                                    <h2 className="font-poppins text-[18px] font-bold text-[var(--color-navbar)]">
                                        {section.id}. {section.title}
                                    </h2>
                                    <p className="font-poppins text-[15px] font-normal leading-[26px] text-slate-600">
                                        {section.content}
                                    </p>
                                    {section.list && (
                                        <ul className="space-y-2 pl-6">
                                            {section.list.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="font-poppins text-[15px] font-normal leading-[26px] text-slate-600 flex items-start gap-3"
                                                >
                                                    <span className="text-slate-400 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div 
                                className="font-poppins text-[15px] font-normal leading-[26px] text-slate-600 legal-content"
                                dangerouslySetInnerHTML={{ __html: termsData.content }}
                            />
                        )}
                    </div>

                    {/* Last Updated */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <p className="font-poppins text-[14px] text-slate-500">
                            Last updated: {termsData.updated_at ? new Date(termsData.updated_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsAndConditions

