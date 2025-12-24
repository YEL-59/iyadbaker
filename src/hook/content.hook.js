import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../lib/axios.config";

export const usePrivacyPolicy = () => {
    return useQuery({
        queryKey: ["privacy-policy"],
        queryFn: async () => {
            const res = await axiosPublic.get("/content/privacyPolicy");
            return res.data;
        },
    });
};

export const useTermsAndConditions = () => {
    return useQuery({
        queryKey: ["terms-and-conditions"],
        queryFn: async () => {
            const res = await axiosPublic.get("/content/termsAndConditions");
            return res.data;
        },
    });
};
