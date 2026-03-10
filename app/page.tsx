import { Hero } from "@/components/Hero";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { TechStack } from "@/components/TechStack";
import { StartAProject } from "@/components/StartAProject";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <WhatWeOffer />
      <StartAProject />
    </main>
  );
}
