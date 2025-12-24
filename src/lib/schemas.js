import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirmation: z.string().min(6, "Password confirmation must be at least 6 characters"),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
});

export const verifyEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(4, "OTP is required"), // Assuming OTP length, adjust if needed
});

export const resendOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const verifyOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().min(4, "OTP is required"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  password_confirmation: z.string().min(6, "Password confirmation must be at least 6 characters"),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
});
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company_name: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  privacy_policy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export const getStartedSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company_name: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  lead_service_id: z.string().min(1, "Service selection is required"),
  message: z.string().max(2000).optional(),
  privacy_policy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  about: z.string().nullable().optional(),
  website: z.string().url("Invalid URL").nullable().optional().or(z.literal('')),
  birthday: z.string().nullable().optional(),
});

export const updatePasswordSchema = z.object({
  old_password: z.string().min(6, "Old password must be at least 6 characters"),
  password: z.string().min(6, "New password must be at least 6 characters"),
  password_confirmation: z.string().min(6, "Password confirmation must be at least 6 characters"),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
});
