import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";
import { SiSwagger } from "@icons-pack/react-simple-icons";
import { Dotnet, Radix, Tanstack, Vite } from "@/lib/svgs";
import React from "react";

export type Cta = {
  text: string;
  url: string;
};

export const ctas: Cta[] = [
  {
    text: "Production",
    url: "https://contactdash.netlify.app",
  },
  {
    text: "Figma",
    url: "https://www.figma.com/design/FFE2IpYIgB8X1EzHPi2wMb/Untitled?node-id=1-72&m=dev&t=14WAC5rZtkGdNrcK-1",
  },
  {
    text: "REST API docs",
    url: "https://anybus.online:5001/swagger/index.html",
  },
  {
    text: "Back",
    url: "https://github.com/mokat6/sales-tools",
  },

  {
    text: "Front",
    url: "https://github.com/mokat6/sales-tools-front",
  },
];

export const features = [
  "Infinite scrolling",
  "Cursor based server side pagination",
  "Main table virtualized",
  "Front end uses Swagger generated api sdk",
];

export type TechStackItem = {
  id: number;
  tooltip: string;
  logo: React.JSX.Element;
};

export const techStack: TechStackItem[] = [
  {
    id: 0,
    tooltip: "Typescript",
    logo: <SiTypescript size={32} className="rounded bg-white" color="#3178C6" />,
  },
  {
    id: 1,
    tooltip: "Tailwind CSS",
    logo: <SiTailwindcss size={32} color="#06B6D4" />,
  },
  {
    id: 2,
    tooltip: "Tanstack Table, Tanstack Query, Tanstack Virtual",
    logo: <Tanstack />,
  },
  {
    id: 3,
    tooltip: "Radix primitives",
    logo: <Radix className="bg-black/60 dark:bg-black/20" />,
  },
  {
    id: 4,
    tooltip: "Vite",
    logo: <Vite />,
  },
  {
    id: 5,
    tooltip: "React",
    logo: (
      <span className="dark:text-[color:#61DAFB] text-sky-700">
        <SiReact size={32} title="React" />
      </span>
    ),
  },
  {
    id: 6,
    tooltip: "Swagger / Open API",
    logo: (
      <span className="text-gray-700 bg-[color:#8bf62a]  rounded-full">
        <SiSwagger size={32} />
      </span>
    ),
  },
  {
    id: 7,
    tooltip: "asp .NET core",
    logo: <Dotnet />,
  },
];
