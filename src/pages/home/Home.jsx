import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CrmSection from "@/components/home/CrmSection";
import ServicesSection from "@/components/home/ServicesSection";
import ChooseSection from "@/components/home/ChooseSection";
import Performance from "@/components/home/Performance";
import PriceSection from "@/components/home/PriceSection";
import FaqSection from "@/components/home/FaqSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CrmSection />
      <ServicesSection />
      <ChooseSection />
      <Performance />
      <PriceSection />
      <FaqSection />
    </>
  );
};

export default Home;
