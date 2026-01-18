import Destination from "@/components/Home/Destination";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowInWorks";
import PricingCard from "@/components/Home/PricingCard";
import Review from "@/components/Home/Review";
import TopRated from "@/components/Home/TopRated";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { getAllTestimonial } from "@/services/review/review";
import { getAllPlan } from "@/services/travel/travelPlan";
export const dynamic = "force-dynamic";

export default async function  Home() {
  const res = await getAllPlan();
  const plans = res.data;

  const Reviews = await getAllTestimonial();
  

  return (
    <div>
     <HeroSection/>
     <HowItWorks/>
     <WhyChooseUs/>
     <TopRated plans={plans}/>
     <Destination plans={plans}/>
     <PricingCard/>
     <Review reviews={Reviews}/>
    </div>
  );
}