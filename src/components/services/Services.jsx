import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { servicesData } from '@/data/servicesData'

const Services = () => {
    const navigate = useNavigate()
    const [bookingSuccess, setBookingSuccess] = useState(null)

    const handleBookNow = (service) => {
        const newBooking = {
            id: Date.now().toString(),
            serviceSlug: service.slug,
            serviceTitle: service.title,
            serviceImage: service.heroImage,
            status: 'pending',
            createdAt: new Date().toISOString()
        }

        // Save to localStorage
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')

        // Check if already booked
        const alreadyBooked = existingBookings.some(b => b.serviceSlug === service.slug)
        if (alreadyBooked) {
            navigate('/my-bookings')
            return
        }

        localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]))

        // Show success message briefly then navigate
        setBookingSuccess(service.title)
        setTimeout(() => {
            setBookingSuccess(null)
            navigate('/my-bookings')
        }, 1000)
    }

    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
                {/* Section Header */}
                <h1 className="font-poppins text-[36px] font-bold leading-[1.18] text-[var(--color-navbar)] text-center mb-12">
                    Our All Services
                </h1>

                {/* Services List */}
                <div className="space-y-16">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className="flex-1">
                                <img
                                    src={service.heroImage}
                                    alt={service.title}
                                    className="w-full max-w-full aspect-[652/458] rounded-[14px] object-cover shadow-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-5">
                                <h2 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)]">
                                    {service.title}
                                </h2>

                                <p className="font-poppins text-[16px] font-normal leading-[25px] text-slate-600">
                                    {service.heroDescription}
                                </p>

                                <div className="space-y-3">
                                    <h3 className="font-poppins text-[16px] font-bold text-[var(--color-navbar)]">
                                        What We Provide
                                    </h3>
                                    <ul className="space-y-2">
                                        {service.whatYouGet.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="font-poppins text-[14px] font-normal leading-[22px] text-slate-600 flex items-start gap-2"
                                            >
                                                <span className="text-slate-400 mt-0.5">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button
                                        onClick={() => handleBookNow(service)}
                                        className="px-6 py-2.5 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-semibold rounded-lg hover:bg-[var(--color-navbar)]/90 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Book Now
                                    </button>
                                    <Link
                                        to="/pricing"
                                        className="px-6 py-2.5 bg-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[14px] font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="px-6 py-2.5 border-2 border-[var(--color-accent)] text-[var(--color-navbar)] font-poppins text-[14px] font-semibold rounded-lg hover:bg-[var(--color-accent)]/10 transition-colors"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Success Toast */}
            {bookingSuccess && (
                <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in z-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-poppins text-[14px] font-medium">{bookingSuccess} added to bookings!</span>
                </div>
            )}
        </section>
    )
}

export default Services
