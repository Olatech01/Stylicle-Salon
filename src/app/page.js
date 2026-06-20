import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Recommended from "@/components/Recommended";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Services />
      <Experience />
      <Recommended />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
