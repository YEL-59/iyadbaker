import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../lib/axios.config";

export const usePricingPlans = () => {
    return useQuery({
        queryKey: ["pricing-plans"],
        queryFn: async () => {
            const res = await axiosPublic.get("/pricing-plan");
            return res.data;
        },
    });
};
