import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Havac from "@/assets/svg/havac";
import Constraction from "@/assets/svg/constraction";
import Insurance from "@/assets/svg/insurance";
import Lawfarm from "@/assets/svg/lawfarm";
import RealEstate from "@/assets/svg/realestate";
import { servicesData } from "@/data/servicesData";

const services = [
    {
        title: "HVAC Leads",
        slug: "hvac-leads",
        description: "Homeowners actively looking for heating & cooling professionals.",
        Icon: Havac,
    },
    {
        title: "Construction Leads",
        slug: "construction-leads",
        description: "Real residential and commercial clients ready for bids.",
        Icon: Constraction,
    },
    {
        title: "Insurance Leads",
        slug: "insurance-leads",
        description: "Warm prospects looking for coverage options.",
        Icon: Insurance,
    },
    {
        title: "Real Estate Leads",
        slug: "real-estate-leads",
        description: "Buyers, sellers, and investors looking to move fast.",
        Icon: RealEstate,
    },
    {
        title: "Law Firm Leads",
        slug: "law-firm-leads",
        description: "Buyers, sellers, and investors looking to move fast.",
        Icon: Lawfarm,
    },
];

const ServicesSection = () => {
    const navigate = useNavigate();
    const [bookingSuccess, setBookingSuccess] = useState(null);

    const handleBookNow = (service) => {
        // Get full service data
        const fullService = servicesData.find(s => s.slug === service.slug);

        const newBooking = {
            id: Date.now().toString(),
            serviceSlug: service.slug,
            serviceTitle: service.title,
            serviceImage: fullService?.heroImage || null,
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        // Save to localStorage
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');

        // Check if already booked
        const alreadyBooked = existingBookings.some(b => b.serviceSlug === service.slug);
        if (alreadyBooked) {
            navigate('/my-bookings');
            return;
        }

        localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));

        // Show success message briefly then navigate
        setBookingSuccess(service.title);
        setTimeout(() => {
            setBookingSuccess(null);
            navigate('/my-bookings');
        }, 1000);
    };

    return (
        <section className="bg-[#e7f1ff] px-4 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Our Lead Generation Services
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="flex h-full flex-col rounded-lg bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-10 text-[var(--color-navbar)]">
                                <service.Icon />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-900">{service.title}</h3>
                            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                                {service.description}
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <button
                                    onClick={() => handleBookNow(service)}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[var(--color-navbar)] text-white text-[11px] font-semibold rounded-md hover:bg-[var(--color-navbar)]/90 transition-colors"
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Book Now
                                </button>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center text-[11px] font-semibold text-[var(--color-navbar)] transition hover:opacity-80"
                                >
                                    Read More <span className="ml-1 text-lg leading-none">→</span>
                                </Link>
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
    );
};

export default ServicesSection;