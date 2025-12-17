import React from 'react'

const termsData = [
    {
        id: 1,
        title: "Introduction",
        content: "By accessing this website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
        id: 2,
        title: "Information We Collect",
        content: "We collect information that you provide to us when you create an account, make a booking, or subscribe. This may include your name and email address, payment details, and other information you choose to provide."
    },
    {
        id: 3,
        title: "Use of Information",
        content: "We use the information we collect to provide and improve our Services, process payments and transactions, communicate with you about products, services, and events offered by us and others, and for customer service purposes. We may also use your information for marketing and promotional purposes."
    },
    {
        id: 4,
        title: "Disclosure of Information",
        content: "We may disclose your information in the following circumstances:",
        list: [
            "To comply with legal obligations",
            "To protect and defend our rights or property",
            "To prevent or investigate possible wrongdoing in connection with the Service",
            "To protect the personal safety of users of the Service or the public"
        ]
    },
    {
        id: 5,
        title: "Security",
        content: "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no Internet or email transmission is ever fully secure or error-free, so we cannot guarantee the absolute security of your information."
    },
    {
        id: 6,
        title: "Your Rights",
        content: "You have the right to access, correct, or delete your personal information. You can exercise these rights by contacting us. You may also have additional rights depending on your jurisdiction."
    },
    {
        id: 7,
        title: "Changes to Privacy Policy",
        content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page and your continued use of the site after any changes have been posted constitutes your acceptance of the changes."
    }
]

const TermsAndConditions = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-[var(--color-navbar)] py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="font-poppins text-[40px] font-bold text-white text-center">
                        Terms and condition
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-10">
                        {termsData.map((section) => (
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
                        ))}
                    </div>

                    {/* Last Updated */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <p className="font-poppins text-[14px] text-slate-500">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsAndConditions

