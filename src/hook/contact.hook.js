import { useMutation } from "@tanstack/react-query";
import { axiosPrivate, axiosPublic } from "../lib/axios.config";
import toast from "react-hot-toast";

// Helper for error handling (reused from auth.hook or can be centralized)
const handleError = (error) => {
    const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error.message ||
        "An error occurred";
    toast.error(message);
    return message;
};

export const useGetStarted = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/contact-us", data);
            return res.data;
        },
        onSuccess: (data) => {
            if (data?.status) {
                toast.success(data?.message || "Message sent successfully!");
            } else {
                toast.error(data?.message || "Failed to send message");
            }
        },
        onError: handleError,
    });
};


export const useContactUs = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/contact-us", data);
            return res.data;
        },
        onSuccess: (data) => {
            if (data?.status) {
                toast.success(data?.message || "Message sent successfully!");
            } else {
                toast.error(data?.message || "Failed to send message");
            }
        },
        onError: handleError,
    });
};