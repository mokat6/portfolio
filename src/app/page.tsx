import { ExperienceCard } from "@/components/ExperienceCard";
import { ExperienceCardText } from "@/components/ExperienceCardText";

import * as exp1 from "@/data/workExperience1";
import * as exp3 from "@/data/workExperience3";
import { LottieAnim } from "@/components/LottieAnim";
import { expBullets1, expBullets2 } from "@/data/workExperienceText";
import clsx from "clsx";

export default function Home() {
  return (
    <div className={clsx("font-sans")}>
      <h1 className="text-4xl">My Experience</h1>
      <ExperienceCard
        title="2025 - Sales dashboard"
        features={exp1.features}
        techstack={exp1.techStack}
        ctas={exp1.ctas}
        graphics={<LottieAnim />}
      />
      <ExperienceCardText bullets={expBullets1} title="Internship @Wix, mobile engineer" date="2024 June - 2025 Feb" />

      <ExperienceCard
        title="2024 - Anyksciai bus station webapp"
        features={exp3.features}
        techstack={exp3.techStack}
        ctas={exp3.ctas}
      />

      <ExperienceCardText
        bullets={expBullets2}
        title="Code Academy - JAVA 600 hour course"
        date="2023 Oct - 2024 Feb"
      />
    </div>
  );
}
