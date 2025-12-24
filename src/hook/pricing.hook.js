import { useQuery, useMutation } from "@tanstack/react-query";
import { axiosPublic, axiosPrivate } from "../lib/axios.config";
import toast from "react-hot-toast";

export const usePricingPlans = () => {
    return useQuery({
        queryKey: ["pricing-plans"],
        queryFn: async () => {
            const res = await axiosPublic.get("/pricing-plan");
            return res.data;
        },
    });
};

export const useCreateStripeCheckout = () => {
    return useMutation({
        mutationFn: async ({ planId, serviceId, successUrl, cancelUrl }) => {
            const params = new URLSearchParams();
            params.append("planId", planId);
            params.append("leadServiceId", serviceId);
            params.append("success_url", successUrl);
            params.append("cancel_url", cancelUrl);

            const url = `/subscription/checkout/${planId}?${params.toString()}`;
            console.log("🔄 Creating Checkout Session:", url);

            const res = await axiosPrivate.post(url);
            return res.data;
        },
        onSuccess: (data) => {
            console.log("✅ Checkout response:", data);
            const checkoutUrl = data?.data?.url || data?.url || data?.checkout_url;
            if (checkoutUrl) {
                window.location.href = checkoutUrl;
            } else {
                toast.error("Failed to get checkout URL");
            }
        },
        onError: (error) => {
            console.error("❌ Checkout error:", error?.response?.data || error);
            const errorMessage = error?.response?.data?.message || error?.message || "Failed to create checkout session";
            toast.error(errorMessage);
        },
    });
};
