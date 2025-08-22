import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Tooltip } from "./Tooltip";
import { SiSwagger } from "@icons-pack/react-simple-icons";
import { Dotnet, Radix, Tanstack, Vite } from "@/lib/svgs";
import { LottieAnim } from "./LottieAnim";
import { PropsWithChildren } from "react";

const WORK: WorkType[] = [
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

export const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold text-2xl">2025 - Sales dashboard</div>
      <div className="flex gap-3">
        {WORK.map(({ text, url }) => (
          <OutsideLink key={text} text={text} url={url} />
        ))}
      </div>

      <div className=" flex w-full gap-10">
        <div className="flex flex-col gap-5">
          <div className="w-80 flex gap-3 pt-4   ">
            <RenderTechLogo tooltip="Typescript">
              <span className="bg-white rounded-xl ">
                <SiTypescript size={32} color="#3178C6" />
              </span>
            </RenderTechLogo>

            <RenderTechLogo tooltip="Tailwind CSS">
              <SiTailwindcss size={32} color="#06B6D4" />
            </RenderTechLogo>

            <RenderTechLogo tooltip="Tanstack Table, Tanstack Query, Tanstack Virtual">
              <Tanstack />
            </RenderTechLogo>

            <RenderTechLogo tooltip="Radix primitives">
              <span className="text-white bg-black/60 dark:bg-black/20 pl-0.5 rounded">
                <Radix />
              </span>
            </RenderTechLogo>

            <RenderTechLogo tooltip="Vite">
              <Vite />
            </RenderTechLogo>

            <RenderTechLogo tooltip="React">
              <span className="dark:text-[color:#61DAFB] text-sky-700">
                <SiReact size={32} title="React" />
              </span>
            </RenderTechLogo>

            <RenderTechLogo tooltip="Swagger / Open API">
              <span className="text-gray-700 bg-[color:#8bf62a]  rounded-full">
                <SiSwagger size={32} />
              </span>
            </RenderTechLogo>

            <RenderTechLogo tooltip="asp .NET core">
              <Dotnet />
            </RenderTechLogo>
          </div>
          <div className="w-80">
            <h2 className="text-xl font-bold">Features:</h2>
            <ul>
              <li>Infinite scrolling </li>
              <li>Cursor based server side pagination </li>
              <li>Main table virtualized</li>
              <li>Front end uses Swagger generated api sdk</li>
            </ul>
          </div>
        </div>
        <LottieAnim />
      </div>

      {/* <LottieAnim /> */}
    </div>
  );
};

const OutsideLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <a
      className="inline-block bg-primary text-white font-medium rounded-lg px-3 py-2 shadow-sm transition duration-300 
        hover:bg-blue-600 hover:shadow-md hover:scale-[1.02]"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

type RenderTechLogoProps = PropsWithChildren<{
  tooltip: string;
}>;

const RenderTechLogo = ({ tooltip, children }: RenderTechLogoProps) => {
  return (
    <div
      style={{ height: 32, width: 32 }}
      className=" inline-flex min-w-8  grayscale hover:grayscale-0 transition duration-300"
    >
      <Tooltip message={tooltip}>{children}</Tooltip>
    </div>
  );
};
