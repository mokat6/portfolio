import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import Tanstack from "../../public/tech-stack/tanstack.png";
import Radix from "../../public/tech-stack/radix.png";
import Image from "next/image";
import { Tooltip } from "./Tooltip";

const WORK: WorkType[] = [
  {
    text: "Figma",
    url: "https://www.figma.com/design/FFE2IpYIgB8X1EzHPi2wMb/Untitled?node-id=1-72&m=dev&t=14WAC5rZtkGdNrcK-1",
  },
  {
    text: "Back",
    url: "https://github.com/mokat6/sales-tools",
  },
  {
    text: "REST API docs",
    url: "https://anybus.online:5001/swagger/index.html",
  },
  {
    text: "Front",
    url: "https://github.com/mokat6/sales-tools-front",
  },

  {
    text: "Production",
    url: "https://contactdash.netlify.app",
  },
];

type WorkType = {
  text: string;
  url: string;
};

export const ExperienceCard4 = () => {
  return (
    <div className="bg-white/20 flex w-full gap-10">
      <div>2023 oct to 2024 feb</div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <div>Code Academy - JAVA 600 hour course.</div>
          <ul className="list-disc list-inside ">
            <li>OOP</li>
            <li>Basics</li>
            <li>MySQL</li>
            <li>Spring Boot</li>
            <li>Graduated with top marks 10/10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Resource = ({ text, url }: { text: string; url: string }) => {
  return (
    <div>
      <a href={url}>{text}</a>
    </div>
  );
};
