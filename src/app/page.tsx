import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceCard2 } from "@/components/ExperienceCard2";
import { ExperienceCard3 } from "@/components/ExperienceCard3";
import { ExperienceCard4 } from "@/components/ExperienceCard4";

import * as exp1 from "@/data/workExperience1";
import * as exp3 from "@/data/workExperience3";
import { LottieAnim } from "@/components/LottieAnim";

export default function Home() {
  return (
    <div className="font-sans  flex flex-col gap-15  min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-4xl">My Exp</h1>
      <ExperienceCard
        title="2025 - Sales dashboard"
        features={exp1.features}
        techstack={exp1.techStack}
        ctas={exp1.ctas}
        graphics={<LottieAnim />}
      />
      <ExperienceCard2 />
      <ExperienceCard
        title="2024 - Anyksciai bus station webapp"
        features={exp3.features}
        techstack={exp3.techStack}
        ctas={exp3.ctas}
      />
      <ExperienceCard4 />
      <div>so this is content lol</div>
      <div>and this must be the fooooter LFooter</div>
    </div>
  );
}
