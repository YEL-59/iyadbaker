import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/schemas'
import { useContactUs } from '@/hook/contact.hook'
import contactImg from '@/assets/faq.png'

const Contact = () => {
    const { mutate, isPending } = useContactUs()
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: '',
            privacy_policy: false
        }
    })

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                if (res.status) {
                    reset()
                }
            }
        })
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

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("first_name")}
                                        placeholder="First name"
                                        className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${errors.first_name ? 'border-red-500' : 'border-slate-200'}`}
                                    />
                                    {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                                </div>
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                        Last Name (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        {...register("last_name")}
                                        placeholder="Last name"
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
                                    {...register("email")}
                                    placeholder="you@company.com"
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="+1 (555) 000-0000"
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all resize-none ${errors.message ? 'border-red-500' : 'border-slate-200'}`}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            {/* Privacy Policy Checkbox */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy_policy"
                                        {...register("privacy_policy")}
                                        className="mt-1 w-4 h-4 rounded border-slate-300 text-[var(--color-navbar)] focus:ring-[var(--color-navbar)]"
                                    />
                                    <label htmlFor="privacy_policy" className="font-poppins text-[13px] text-slate-500 leading-relaxed">
                                        I give Leadsnsaas permission to contact me in response to my enquiry. I have read and accept the{' '}
                                        <a href="#" className="text-[var(--color-navbar)] underline hover:text-[var(--color-navbar)]/80">
                                            privacy policy
                                        </a>.
                                    </label>
                                </div>
                                {errors.privacy_policy && <p className="text-red-500 text-xs">{errors.privacy_policy.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[15px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-[var(--color-accent)]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isPending ? (
                                    <svg className="animate-spin h-5 w-5 text-[var(--color-navbar)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    'Send Message'
                                )}
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

