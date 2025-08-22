import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Tooltip } from "./Tooltip";
import { SiSwagger } from "@icons-pack/react-simple-icons";
import { Dotnet, Radix, Tanstack, Vite } from "@/lib/svgs";
import { PropsWithChildren } from "react";
import { Cta, TechStackItem } from "@/data/workExperience1";

type ExperienceCardProps = {
  ctas: Cta[];
  features: string[];
  techstack: TechStackItem[];
  graphics: React.ReactNode;
};

export const ExperienceCard = ({ features, graphics, techstack, ctas }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold text-2xl">2025 - Sales dashboard</div>
      <div className="flex gap-3">
        {ctas.map(({ text, url }, idx) => (
          <a
            key={idx}
            className="inline-block bg-primary text-white font-medium rounded-lg px-3 py-2 shadow-sm transition duration-300 
             hover:bg-primary/80 hover:shadow-md hover:scale-[1.02]"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        ))}
      </div>

      <div className=" flex w-full gap-10">
        <div className="flex flex-col gap-5">
          <div className="w-80 flex gap-3 pt-4   ">
            {techstack.map(({ id, logo, tooltip }) => {
              return (
                <div
                  key={id}
                  style={{ height: 32, width: 32 }}
                  className=" inline-flex min-w-8  grayscale hover:grayscale-0 transition duration-300"
                >
                  <Tooltip message={tooltip}>{logo}</Tooltip>
                </div>
              );
            })}
          </div>

          <div className="w-80">
            <h2 className="text-xl font-bold">Features:</h2>
            <ul>
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        {graphics}
        {/* <LottieAnim /> */}
      </div>
    </div>
  );
};
