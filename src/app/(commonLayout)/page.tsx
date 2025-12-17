import Destination from "@/components/Home/Destination";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorks from "@/components/Home/HowInWorks";
import PricingCard from "@/components/Home/PricingCard";
import Review from "@/components/Home/Review";
import TopRated from "@/components/Home/TopRated";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <HowItWorks/>
     <WhyChooseUs/>
     <TopRated/>
     <Destination/>
     <PricingCard/>
     <Review/>
    </div>
  );
}