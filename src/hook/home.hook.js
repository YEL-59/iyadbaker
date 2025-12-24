import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../lib/axios.config";

export const useFaqs = (params = {}) => {
    return useQuery({
        queryKey: ["faqs", params],
        queryFn: async () => {
            const res = await axiosPublic.get("/faq", { params });
            return res.data;
        },
    });
};

export const useWhyChooseUs = () => {
    return useQuery({
        queryKey: ["why-choose-us"],
        queryFn: async () => {
            const res = await axiosPublic.get("/home-page/content/why_choose_us");
            return res.data;
        },
    });
};

export const useServiceBenefits = () => {
    return useQuery({
        queryKey: ["service-benefits"],
        queryFn: async () => {
            const res = await axiosPublic.get("/home-page/content/service_benefits");
            return res.data;
        },
    });
};

export const useHero = () => {
    return useQuery({
        queryKey: ["hero"],
        queryFn: async () => {
            const res = await axiosPublic.get("/home-page");
            return res.data;
        },
    });
};
