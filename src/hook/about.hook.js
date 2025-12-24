import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../lib/axios.config";

export const useAboutServiceBenefits = () => {
    return useQuery({
        queryKey: ["about-service-benefits"],
        queryFn: async () => {
            const res = await axiosPublic.get("/about-page/content/service_benefits");
            return res.data;
        },
    });
};

export const useAboutMission = () => {
    return useQuery({
        queryKey: ["about-mission"],
        queryFn: async () => {
            const res = await axiosPublic.get("/about-page/mission");
            return res.data;
        },
    });
};

export const useAboutVision = () => {
    return useQuery({
        queryKey: ["about-vision"],
        queryFn: async () => {
            const res = await axiosPublic.get("/about-page/vision");
            return res.data;
        },
    });
};

export const useCoreValues = () => {
    return useQuery({
        queryKey: ["core-values"],
        queryFn: async () => {
            const res = await axiosPublic.get("/core-value/features");
            return res.data;
        },
    });
};

export const useAboutOurStory = () => {
    return useQuery({
        queryKey: ["about-our-story"],
        queryFn: async () => {
            const res = await axiosPublic.get("/about-page/content/our_story");
            return res.data;
        },
    });
};
