import Hero from "@/components/Hero";
import Organizers from "@/components/Organizers";
import Tracks from "@/components/Tracks";
import EventDetails from "@/components/EventDetails";
import WhatYoullBuild from "@/components/WhatYoullBuild";
import Prize from "@/components/Prize";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Hero />
      <Organizers />
      <Tracks />
      <EventDetails />
      <WhatYoullBuild />
      <Prize />
      <CTAFooter />
    </main>
  );
};

export default Index;
