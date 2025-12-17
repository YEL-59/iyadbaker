import React, { useState } from 'react'
import { Link } from 'react-router'

const Profile = () => {
    // Fake user data
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        company: "Acme Corporation",
        location: "New York, USA",
        joinedDate: "December 2024",
        avatar: null
    })

    const [isEditing, setIsEditing] = useState(false)
    const [editForm, setEditForm] = useState(user)

    // Stats data
    const stats = [
        { label: "Total Bookings", value: "12", icon: "📋" },
        { label: "Active Services", value: "3", icon: "✨" },
        { label: "Completed", value: "9", icon: "✅" },
        { label: "Pending", value: "2", icon: "⏳" },
    ]

    const handleSave = () => {
        setUser(editForm)
        setIsEditing(false)
    }

    return (
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-12 px-4">
            <div className="container mx-auto max-w-5xl">
                {/* Header Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-8">
                    {/* Cover Image */}
                    <div className="h-40 bg-gradient-to-r from-[var(--color-navbar)] via-[#1a4a8f] to-[var(--color-topbar)] relative">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
                    </div>

                    {/* Profile Info */}
                    <div className="px-8 pb-8 -mt-16 relative">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
                            {/* Avatar */}
                            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-yellow-400 flex items-center justify-center text-[var(--color-navbar)] text-5xl font-bold shadow-xl border-4 border-white">
                                {user.name.charAt(0).toUpperCase()}
                            </div>

                            {/* User Info */}
                            <div className="flex-1 text-center sm:text-left pb-2">
                                <h1 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)]">
                                    {user.name}
                                </h1>
                                <p className="font-poppins text-[14px] text-slate-500 flex items-center justify-center sm:justify-start gap-2 mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {user.email}
                                </p>
                                <p className="font-poppins text-[13px] text-slate-400 mt-1">
                                    Member since {user.joinedDate}
                                </p>
                            </div>

                            {/* Edit Button */}
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="px-6 py-2.5 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-semibold rounded-xl hover:bg-[var(--color-navbar)]/90 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
                        >
                            <span className="text-3xl mb-2 block">{stat.icon}</span>
                            <p className="font-poppins text-[28px] font-bold text-[var(--color-navbar)]">
                                {stat.value}
                            </p>
                            <p className="font-poppins text-[13px] text-slate-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h2 className="font-poppins text-[18px] font-bold text-[var(--color-navbar)] mb-6 flex items-center gap-2">
                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Personal Information
                            </h2>

                            {isEditing ? (
                                /* Edit Form */
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.name}
                                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={editForm.email}
                                                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={editForm.phone}
                                                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.company}
                                                onChange={(e) => setEditForm({ ...editForm, company: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)]"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 mb-2">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                value={editForm.location}
                                                onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button
                                            onClick={handleSave}
                                            className="px-6 py-2.5 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-semibold rounded-xl hover:bg-[var(--color-navbar)]/90 transition-colors"
                                        >
                                            Save Changes
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditForm(user)
                                                setIsEditing(false)
                                            }}
                                            className="px-6 py-2.5 border border-slate-200 text-slate-700 font-poppins text-[14px] font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                /* Display Info */
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <p className="font-poppins text-[12px] text-slate-400 uppercase tracking-wider mb-1">Full Name</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800">{user.name}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <p className="font-poppins text-[12px] text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800">{user.email}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <p className="font-poppins text-[12px] text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800">{user.phone}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl">
                                            <p className="font-poppins text-[12px] text-slate-400 uppercase tracking-wider mb-1">Company</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800">{user.company}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl sm:col-span-2">
                                            <p className="font-poppins text-[12px] text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {user.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-poppins text-[16px] font-bold text-[var(--color-navbar)] mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    to="/my-bookings"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700">My Bookings</p>
                                        <p className="font-poppins text-[12px] text-slate-400">View all your bookings</p>
                                    </div>
                                </Link>

                                <Link
                                    to="/services"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700">Browse Services</p>
                                        <p className="font-poppins text-[12px] text-slate-400">Explore our services</p>
                                    </div>
                                </Link>

                                <Link
                                    to="/pricing"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700">View Pricing</p>
                                        <p className="font-poppins text-[12px] text-slate-400">Check our plans</p>
                                    </div>
                                </Link>

                                <Link
                                    to="/contact"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700">Contact Support</p>
                                        <p className="font-poppins text-[12px] text-slate-400">Get help from us</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-poppins text-[16px] font-bold text-[var(--color-navbar)] mb-4">
                                Account Settings
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                    <span className="font-poppins text-[14px] text-slate-700">Change Password</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <span className="font-poppins text-[14px] text-slate-700">Notifications</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors text-left text-red-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    <span className="font-poppins text-[14px] font-medium">Delete Account</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile

