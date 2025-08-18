import { LottieAnim } from "./LottieAnim";
import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import Tanstack from "../../public/tech-stack/tanstack.png";
import Vite from "../../public/tech-stack/vite.svg";
import Radix from "../../public/tech-stack/radix.png";
import Dotnet from "../../public/tech-stack/NET_Core_Logo.svg";
import Image from "next/image";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Tooltip } from "./Tooltip";
import { SiSwagger } from "@icons-pack/react-simple-icons";

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

export const ExperienceCard = () => {
  return (
    <div className="bg-white/20 flex w-full gap-10">
      <div>2015</div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <div>Sales dashboard</div>
          <div className="flex gap-3">
            {WORK.map(({ text, url }) => (
              <Resource key={text} text={text} url={url} />
            ))}
          </div>
          <div className="w-80 flex gap-3 pt-4">
            <Tooltip message="Typescript">
              <SiTypescript size={32} color="#3178C6" />
            </Tooltip>
            <Tooltip message="Tailwind CSS">
              <SiTailwindcss size={32} color="#06B6D4" />
            </Tooltip>
            <Tooltip message="Tanstack Table, Tanstack Query, Tanstack Virtual">
              <Image src={Tanstack} alt="TanStack" width={32} height={32} />
            </Tooltip>
            <Tooltip message="Radix primitives">
              <Image src={Radix} alt="Radix" width={32} height={32} />
            </Tooltip>
            <Tooltip message="Vite">
              <Image src={Vite} alt="Vite" width={32} height={32} />
            </Tooltip>
            <Tooltip message="React">
              <SiReact size={32} color="#61DAFB" title="React" />
            </Tooltip>
            <Tooltip message="Swagger / Open API">
              <SiSwagger size={32} color="#85EA2D" title="Swagger" />
            </Tooltip>
            <Tooltip message="asp .NET core">
              <Image src={Dotnet} alt="Vite" width={32} height={32} />
            </Tooltip>
          </div>
          <div className="w-80">
            Features: Infinite scrolling, cursor based server side pagination, main table virtualized, front end uses
            Swagger generated api sdk
          </div>
        </div>
        <LottieAnim />
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
