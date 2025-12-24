import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfileSchema, updatePasswordSchema } from '@/lib/schemas'
import { useUserInfo, useUpdateProfile, useUpdatePassword } from '@/hook/auth.hook'

const Profile = () => {
    const { data: userResponse, isLoading: userLoading, isError: userError } = useUserInfo()
    const user = userResponse?.data
    
    const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile()
    const { mutate: updatePassword, isPending: isUpdatingPassword } = useUpdatePassword()

    const [isEditing, setIsEditing] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)

    // File Upload Handlers
    const handleFileUpload = (e, type) => {
        const file = e.target.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append(type, file)
        
        // Use the same updateProfile hook but with FormData
        updateProfile(formData)
    }

    // Profile Form
    const {
        register: registerProfile,
        handleSubmit: handleSubmitProfile,
        reset: resetProfile,
        formState: { errors: profileErrors }
    } = useForm({
        resolver: zodResolver(updateProfileSchema)
    })

    // Password Form
    const {
        register: registerPassword,
        handleSubmit: handleSubmitPassword,
        reset: resetPassword,
        formState: { errors: passwordErrors }
    } = useForm({
        resolver: zodResolver(updatePasswordSchema)
    })

    // Sync form with user data when editing starts
    useEffect(() => {
        if (isEditing && user) {
            resetProfile({
                name: user.name || '',
                phone: user.phone || '',
                address: user.address || '',
                about: user.about || '',
                website: user.website || '',
                birthday: user.birthday || '',
            })
        }
    }, [isEditing, user, resetProfile])

    const onProfileSubmit = (data) => {
        updateProfile(data, {
            onSuccess: (res) => {
                if (res.status) {
                    setIsEditing(false)
                }
            }
        })
    }

    const onPasswordSubmit = (data) => {
        updatePassword(data, {
            onSuccess: (res) => {
                if (res.status) {
                    setShowPasswordModal(false)
                    resetPassword()
                }
            }
        })
    }

    if (userLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-navbar)]"></div>
            </div>
        )
    }

    if (userError || !user) {
        return (
            <div className="text-center py-20 text-red-500 font-poppins">
                Failed to load profile. Please sign in again.
            </div>
        )
    }

    return (
        <section className="bg-slate-50 dark:bg-slate-950/20 min-h-screen py-12 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-5xl">
                {/* Header Card */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mb-8 transition-colors duration-300">
                    {/* Cover Image */}
                    <div className="h-40 bg-gradient-to-r from-[var(--color-navbar)] via-[#1a4a8f] to-[var(--color-topbar)] relative group cursor-pointer dark:opacity-90">
                        <input
                            type="file"
                            id="cover-upload"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, 'cover_photo')}
                        />
                        <label htmlFor="cover-upload" className="absolute inset-0 cursor-pointer">
                            {user.cover_photo ? (
                                <img src={user.cover_photo} alt="Cover" className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
                            )}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-sm font-semibold flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Change Cover
                                </span>
                            </div>
                        </label>
                    </div>

                    {/* Profile Info */}
                    <div className="px-8 pb-8 -mt-16 relative">
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
                            {/* Avatar */}
                            <div className="relative group">
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => handleFileUpload(e, 'avatar')}
                                />
                                <label htmlFor="avatar-upload" className="block relative cursor-pointer">
                                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-yellow-400 flex items-center justify-center text-[var(--color-navbar)] text-5xl font-bold shadow-xl border-4 border-white dark:border-slate-800 overflow-hidden relative">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            user.name.charAt(0).toUpperCase()
                                        )}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {/* User Info */}
                            <div className="flex-1 text-center sm:text-left pb-2">
                                <h1 className="font-poppins text-[28px] font-bold text-[var(--color-navbar)] dark:text-white">
                                    {user.name}
                                </h1>
                                <p className="font-poppins text-[14px] text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-2 mt-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {user.email}
                                </p>
                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2">
                                    {user.role && (
                                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-bold uppercase tracking-wider rounded-full border border-blue-100 dark:border-blue-500/20">
                                            {user.role}
                                        </span>
                                    )}
                                    <span className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border ${
                                        user.status === 'active' 
                                            ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-100 dark:border-green-500/20' 
                                            : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20'
                                    }`}>
                                        {user.status}
                                    </span>
                                </div>
                            </div>

                            {/* Edit Button */}
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className="px-6 py-2.5 bg-[var(--color-navbar)] dark:bg-slate-800 text-white font-poppins text-[14px] font-semibold rounded-xl hover:bg-[var(--color-navbar)]/90 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 transition-colors duration-300">
                            <h2 className="font-poppins text-[20px] font-bold text-[var(--color-navbar)] dark:text-white mb-8 flex items-center gap-2">
                                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Personal Information
                            </h2>

                            {isEditing ? (
                                /* Edit Form */
                                <form onSubmit={handleSubmitProfile(onProfileSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                {...registerProfile("name")}
                                                className={`w-full px-4 py-3 border rounded-xl font-poppins text-[14px] bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${profileErrors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                                            />
                                            {profileErrors.name && <p className="text-red-500 text-xs mt-1">{profileErrors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                {...registerProfile("phone")}
                                                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Birthday
                                            </label>
                                            <input
                                                type="date"
                                                {...registerProfile("birthday")}
                                                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Website
                                            </label>
                                            <input
                                                type="text"
                                                {...registerProfile("website")}
                                                placeholder="https://example.com"
                                                className={`w-full px-4 py-3 border rounded-xl font-poppins text-[14px] bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all ${profileErrors.website ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                                            />
                                            {profileErrors.website && <p className="text-red-500 text-xs mt-1">{profileErrors.website.message}</p>}
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                {...registerProfile("address")}
                                                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                About Me
                                            </label>
                                            <textarea
                                                {...registerProfile("about")}
                                                rows={4}
                                                className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white rounded-xl font-poppins text-[14px] focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 focus:border-[var(--color-navbar)] transition-all resize-none"
                                                placeholder="Tell us a bit about yourself..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <button
                                            type="submit"
                                            disabled={isUpdatingProfile}
                                            className="px-8 py-3 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-bold rounded-xl hover:bg-[var(--color-navbar)]/90 transition-all shadow-lg shadow-[var(--color-navbar)]/20 disabled:opacity-50 flex items-center gap-2"
                                        >
                                            {isUpdatingProfile && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                                            Save Changes
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            className="px-8 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-poppins text-[14px] font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                /* Display Info */
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">Full Name</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200">{user.name}</p>
                                        </div>
                                        <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">Email</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200">{user.email}</p>
                                        </div>
                                        <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">Phone</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200">{user.phone || 'Not provided'}</p>
                                        </div>
                                        <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">Birthday</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200">{user.birthday || 'Not provided'}</p>
                                        </div>
                                        <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 sm:col-span-2">
                                            <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">Website</p>
                                            {user.website ? (
                                                <a href={user.website} target="_blank" rel="noopener noreferrer" className="font-poppins text-[15px] font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
                                                    {user.website}
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                <p className="font-poppins text-[15px] font-semibold text-slate-500 dark:text-slate-600">Not provided</p>
                                            )}
                                        </div>
                                        <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 sm:col-span-2">
                                            <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">Location</p>
                                            <p className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                                <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {user.address || 'Not provided'}
                                            </p>
                                        </div>
                                        {user.about && (
                                            <div className="p-5 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 sm:col-span-2">
                                                <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">About Me</p>
                                                <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed italic">{user.about}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
                            <h3 className="font-poppins text-[16px] font-bold text-[var(--color-navbar)] dark:text-white mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    to="/my-bookings"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700 dark:text-slate-200">My Bookings</p>
                                        <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500">View all your bookings</p>
                                    </div>
                                </Link>

                                <Link
                                    to="/services"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700 dark:text-slate-200">Browse Services</p>
                                        <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500">Explore our services</p>
                                    </div>
                                </Link>

                                <Link
                                    to="/pricing"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700 dark:text-slate-200">View Pricing</p>
                                        <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500">Check our plans</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Account Settings */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
                            <h3 className="font-poppins text-[16px] font-bold text-[var(--color-navbar)] dark:text-white mb-4">
                                Account Settings
                            </h3>
                            <div className="space-y-3">
                                <button 
                                    onClick={() => setShowPasswordModal(true)}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-[var(--color-navbar)] group-hover:text-white transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-[14px] font-semibold text-slate-700 dark:text-slate-200">Change Password</p>
                                        <p className="font-poppins text-[12px] text-slate-400 dark:text-slate-500">Update your security</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change Password Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in relative overflow-hidden border border-slate-200 dark:border-slate-800">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-navbar)]"></div>
                        
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100 dark:border-blue-500/20">
                                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="font-poppins text-[24px] font-bold text-[var(--color-navbar)] dark:text-white mb-2">
                                Change Password
                            </h3>
                            <p className="font-poppins text-[14px] text-slate-500 dark:text-slate-400">
                                Enter your current and new password below
                            </p>
                        </div>

                        <form onSubmit={handleSubmitPassword(onPasswordSubmit)} className="space-y-5">
                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Old Password
                                </label>
                                <input
                                    type="password"
                                    {...registerPassword("old_password")}
                                    className={`w-full px-4 py-3 border rounded-xl font-poppins text-[14px] bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 transition-all ${passwordErrors.old_password ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                                />
                                {passwordErrors.old_password && <p className="text-red-500 text-xs mt-1">{passwordErrors.old_password.message}</p>}
                            </div>

                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    {...registerPassword("password")}
                                    className={`w-full px-4 py-3 border rounded-xl font-poppins text-[14px] bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 transition-all ${passwordErrors.password ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                                />
                                {passwordErrors.password && <p className="text-red-500 text-xs mt-1">{passwordErrors.password.message}</p>}
                            </div>

                            <div>
                                <label className="block font-poppins text-[13px] font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    {...registerPassword("password_confirmation")}
                                    className={`w-full px-4 py-3 border rounded-xl font-poppins text-[14px] bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar)]/20 transition-all ${passwordErrors.password_confirmation ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                                />
                                {passwordErrors.password_confirmation && <p className="text-red-500 text-xs mt-1">{passwordErrors.password_confirmation.message}</p>}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowPasswordModal(false)
                                        resetPassword()
                                    }}
                                    className="flex-1 px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-poppins text-[14px] font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isUpdatingPassword}
                                    className="flex-1 px-6 py-3 bg-[var(--color-navbar)] text-white font-poppins text-[14px] font-bold rounded-xl hover:bg-[var(--color-navbar)]/90 transition-all shadow-lg shadow-[var(--color-navbar)]/20 disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isUpdatingPassword && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Profile

