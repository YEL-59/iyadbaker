import React, { useState } from 'react'
import contactImg from '@/assets/faq.png'

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        countryCode: 'US',
        phoneNumber: '',
        message: '',
        agreeToPolicy: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission here
    }

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="font-poppins text-[36px] font-bold text-[var(--color-navbar)] text-center mb-12">
                    Have questions or need support?
                </h1>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form Section */}
                    <div>
                        <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] mb-2">
                            Get in touch
                        </h2>
                        <p className="font-poppins text-[14px] text-slate-500 mb-8">
                            Our friendly team would love to hear from you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Apple.inc"
                                        className="w-full px-4 py-3 border border-slate-200 rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                    Phone number
                                </label>
                                <div className="flex">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="px-3 py-3 border border-slate-200 border-r-0 rounded-l-lg font-poppins text-[14px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                    >
                                        <option value="US">US</option>
                                        <option value="UK">UK</option>
                                        <option value="CA">CA</option>
                                        <option value="AU">AU</option>
                                        <option value="DE">DE</option>
                                        <option value="FR">FR</option>
                                        <option value="IN">IN</option>
                                    </select>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="flex-1 px-4 py-3 border border-slate-200 rounded-r-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 border border-slate-200 rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all resize-none"
                                />
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    name="agreeToPolicy"
                                    id="agreeToPolicy"
                                    checked={formData.agreeToPolicy}
                                    onChange={handleChange}
                                    className="mt-1 w-4 h-4 rounded border-slate-300 text-[var(--color-navbar)] focus:ring-[var(--color-navbar)]"
                                />
                                <label htmlFor="agreeToPolicy" className="font-poppins text-[13px] text-slate-500 leading-relaxed">
                                    I give ClevFox permission to contact me in response to my enquiry. I have read and accept the{' '}
                                    <a href="#" className="text-[var(--color-navbar)] underline hover:text-[var(--color-navbar)]/80">
                                        privacy policy
                                    </a>.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[15px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-[var(--color-accent)]/30"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={contactImg}
                            alt="Professional support team"
                            className="w-full max-w-lg rounded-2xl object-cover shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

