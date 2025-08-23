import { SiSpringboot } from "@icons-pack/react-simple-icons";
import { SiJavascript } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Bootstrap, Java } from "@/lib/svgs";
import React from "react";

export type Cta = {
  text: string;
  url: string;
};

export const ctas: Cta[] = [
  {
    text: "Production",
    url: "https://anybus.online/",
  },
  {
    text: "Back",
    url: "https://github.com/FTmiles/busstation-back",
  },
  {
    text: "Front",
    url: "https://github.com/FTmiles/busstation-front",
  },
];

export const features = [
  "JWT authentication with admin role",
  "Extensive admin panel",
  "Loaded with actual Anyksciai bus schedules",
  "Hosted on Namecheap VPS, behind Nginx, with Let's Encrypt SSL",
];

export type TechStackItem = {
  id: number;
  tooltip: string;
  logo: React.JSX.Element;
};

export const techStack: TechStackItem[] = [
  {
    id: 0,
    tooltip: "Javascript",
    logo: <SiJavascript className="text-amber-300 rounded bg-black" size={32} />,
  },
  {
    id: 2,
    tooltip: "React",
    logo: (
      <span className="dark:text-[color:#61DAFB] text-sky-700">
        <SiReact size={32} title="React" />
      </span>
    ),
  },
  {
    id: 3,
    tooltip: "Bootstrap",
    logo: <Bootstrap />,
  },
  {
    id: 4,
    tooltip: "Java",
    logo: <Java />,
  },
  {
    id: 1,
    tooltip: "Spring Boot",
    logo: (
      <span className="relative">
        <span style={{}} className="absolute w-5 h-5 left-1.5 top-1.5 rounded-full bg-white z-0" />
        <SiSpringboot size={32} color="#6db33f" className="relative z-30" />
      </span>
    ),
  },
];
