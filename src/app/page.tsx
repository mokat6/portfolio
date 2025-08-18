import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceCard2 } from "@/components/ExperienceCard2";
import { ExperienceCard3 } from "@/components/ExperienceCard3";
import { ExperienceCard4 } from "@/components/ExperienceCard4";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans  flex flex-col gap-10  min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-4xl">My Exp</h1>
      <ExperienceCard />
      <ExperienceCard2 />
      <ExperienceCard3 />
      <ExperienceCard4 />
      <div>so this is content lol</div>
      <div>and this must be the fooooter LFooter</div>
    </div>
  );
}
