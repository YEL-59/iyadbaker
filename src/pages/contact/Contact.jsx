import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/schemas'
import { useContactUs } from '@/hook/contact.hook'
import contactImg from '@/assets/faq.png'

const Contact = () => {
    const { mutate, isPending, isSuccess } = useContactUs()
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            company_name: '',
            email: '',
            phone: '',
            message: '',
            privacy_policy: false
        }
    })

    // Reset form after successful submission
    useEffect(() => {
        if (isSuccess) {
            reset()
        }
    }, [isSuccess, reset])

    const onSubmit = (data) => {
        const payload = {
            ...data,
            privacy_policy: data.privacy_policy ? 1 : 0
        }
        mutate(payload)
    }

    return (
        <section className="bg-background py-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <h1 className="font-poppins text-[36px] font-bold text-slate-900 dark:text-white text-center mb-12">
                    Have questions or need support?
                </h1>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Form Section */}
                    <div>
                        <h2 className="font-poppins text-[28px] font-bold text-slate-800 dark:text-white mb-2">
                            Get in touch
                        </h2>
                        <p className="font-poppins text-[14px] text-slate-500 dark:text-slate-400 mb-8">
                            Our friendly team would love to hear from you.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name and Company Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        placeholder="Full name"
                                        className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'}`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("company_name")}
                                        placeholder="Apple.inc"
                                        className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.company_name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'}`}
                                    />
                                    {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name.message}</p>}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    placeholder="you@company.com"
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'}`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="+1 (555) 000-0000"
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'}`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className={`w-full px-4 py-3 border rounded-lg font-poppins text-[14px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'}`}
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
                                        className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="privacy_policy" className="font-poppins text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                        I give Leadsnsaas permission to contact me in response to my enquiry. I have read and accept the{' '}
                                        <a href="/privacy-policy" className="text-primary dark:text-[var(--color-accent)] underline hover:opacity-80">
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
                                className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[15px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-[var(--color-accent)]/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isPending ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
                                        Sending...
                                    </>
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

