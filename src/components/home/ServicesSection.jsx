import React from "react";
import { Link } from "react-router";
import { useServices } from "@/hook/service.hook";

const ServicesSection = () => {
  // const navigate = useNavigate();
  // const [bookingSuccess, setBookingSuccess] = useState(null);

  // Fetch top 6 services for the home page
  const { data: response, isLoading } = useServices({ per_page: 6 });
  const services = response?.data?.data || [];

  if (isLoading) {
    return (
      <div className="py-20 flex justify-center items-center bg-[#E8F1FD] dark:bg-slate-950/20">
        <div className="w-10 h-10 border-4 border-[var(--color-navbar)]/20 border-t-[var(--color-navbar)] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (services.length === 0) return null;

  return (
    <section className="bg-[#E8F1FD] dark:bg-slate-950/20 px-4 py-16 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="font-poppins text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Our Lead Generation Services
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex h-full flex-col rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg dark:hover:border-slate-700 group"
            >
              <div className="mb-2 h-auto w-full overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-poppins text-[18px] font-bold text-slate-900 dark:text-white ">
                {service.name}
              </h3>

              <div
                className=" text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3 
                                        prose-premium prose-p:text-[13px] prose-p:leading-relaxed prose-p:mb-0"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />

              <div className="mt-3 flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-[12px] font-bold text-[var(--color-navbar)] dark:text-[var(--color-accent)] hover:underline decoration-2 underline-offset-4"
                >
                  Read More <span className="ml-1 text-base">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
