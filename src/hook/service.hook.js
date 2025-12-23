import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../lib/axios.config";

export const useServices = (params) => {
    return useQuery({
        queryKey: ["services", params],
        queryFn: async () => {
            const res = await axiosPublic.get("/lead-generation-service", { params });
            return res.data;
        },
        keepPreviousData: true,
    });
};

export const useServiceDetails = (id) => {
    return useQuery({
        queryKey: ["service-details", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/lead-generation-service/${id}`);
            return res.data;
        },
        enabled: !!id,
    });
};
