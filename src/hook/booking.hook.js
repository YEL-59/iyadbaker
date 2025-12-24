import { useQuery } from "@tanstack/react-query";
import { axiosPrivate } from "../lib/axios.config";

export const useMyBookings = (params = {}) => {
    return useQuery({
        queryKey: ["my-bookings", params],
        queryFn: async () => {
            const res = await axiosPrivate.get("/my-booking", { params });
            return res.data;
        },
    });
};
