import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosPublic, axiosPrivate } from "../lib/axios.config";
import toast from "react-hot-toast";
import { 
  signInSchema, 
  signUpSchema, 
  verifyEmailSchema, 
  resendOtpSchema, 
  forgotPasswordSchema, 
  verifyOtpSchema, 
  resetPasswordSchema 
} from "../lib/schemas";

// Helper for error handling
const handleError = (error) => {
    const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error.message ||
        "An error occurred";
    toast.error(message);
    return message;
};

// Sign In
export const useSignIn = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = params.get("redirect");

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post("/auth/login", credentials);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.status) {
        toast.success(data?.message || "Sign in successfully");
        const token = data?.token;
        localStorage.setItem("token", token);
        const user = data?.data;
        localStorage.setItem("user", JSON.stringify(user));

        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.message || "Failed to sign in");
      }
    },
    onError: (error) => {
       const message = handleError(error);
       if (message.toLowerCase().includes("email")) {
         form.setError("email", { message });
       }
    },
  });

  return { form, mutate, isPending };
};

// Sign Up
export const useSignUp = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/register", data);
            return res.data;
        },
        onSuccess: (data, variables) => {
             if (data?.status) {
                toast.success(data?.message || "Account created successfully. Please verify your email.");
                // Navigate to verify email page, passing email in query param
                 navigate(`/verify-email?email=${encodeURIComponent(variables.email)}`);
            } else {
                toast.error(data?.message || "Failed to sign up");
            }
        },
        onError: handleError,
    });

    return { form, mutate, isPending };
};

// Verify Email
export const useVerifyEmail = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(verifyEmailSchema),
        defaultValues: {
            email: "",
            otp: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/verify-email", data);
            return res.data;
        },
        onSuccess: (data) => {
             if (data?.status) {
                 toast.success(data?.message || "Email verified successfully");
                 navigate("/sign-in");
             } else {
                 toast.error(data?.message || "Verification failed");
             }
        },
        onError: handleError,
    });

    return { form, mutate, isPending };
};

// Resend OTP
export const useResendOtp = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: async (email) => {
            const res = await axiosPublic.post("/auth/resend-otp", { email });
            return res.data;
        },
        onSuccess: (data) => {
             if (data?.status) {
                toast.success(data?.message || "OTP resent successfully");
             } else {
                toast.error(data?.message || "Failed to resend OTP");
             }
        },
        onError: handleError,
    });

    return { mutate, isPending };
};

// Forgot Password
export const useForgotPassword = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/forget-password", data);
            return res.data;
        },
        onSuccess: (data, variables) => {
             if (data?.status) {
                 toast.success(data?.message || "Reset code sent to your email");
                  navigate(`/verify-otp?email=${encodeURIComponent(variables.email)}`);
             } else {
                 toast.error(data?.message || "Failed to process request");
             }
        },
        onError: handleError,
    });

    return { form, mutate, isPending };
};

// Verify OTP (for Forgot Password)
export const useVerifyOtp = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(verifyOtpSchema),
        defaultValues: {
            email: "",
            otp: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/verify-otp", data);
            return res.data;
        },
         onSuccess: (data, variables) => {
             if (data?.status) {
                 toast.success(data?.message || "OTP verified");
                 // Navigate to reset password page
                  navigate(`/reset-password?email=${encodeURIComponent(variables.email)}`);
             } else {
                 toast.error(data?.message || "Invalid OTP");
             }
        },
        onError: handleError,
    });

    return { form, mutate, isPending };
};

// Reset Password
export const useResetPassword = () => {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/reset-password", data);
            return res.data;
        },
        onSuccess: (data) => {
             if (data?.status) {
                 toast.success(data?.message || "Password reset successfully");
                 navigate("/sign-in");
             } else {
                 toast.error(data?.message || "Failed to reset password");
             }
        },
        onError: handleError,
    });

    return { form, mutate, isPending };
};

// User Info
export const useUserInfo = () => {
    return useQuery({
        queryKey: ["user-info"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/auth/user-info");
            return res.data;
        },
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};