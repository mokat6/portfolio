import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Tooltip } from "./Tooltip";
import { SiSwagger } from "@icons-pack/react-simple-icons";
import { Dotnet, Radix, Tanstack, Vite } from "@/lib/svgs";
import { LottieAnim } from "./LottieAnim";

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
      <div>2025</div>
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
              <span className="bg-white rounded-xl">
                <SiTypescript size={32} color="#3178C6" />
              </span>
            </Tooltip>
            <Tooltip message="Tailwind CSS">
              <SiTailwindcss size={32} color="#06B6D4" />
            </Tooltip>
            <Tooltip message="Tanstack Table, Tanstack Query, Tanstack Virtual">
              <Tanstack />
            </Tooltip>
            <Tooltip message="Radix primitives">
              <Radix />
            </Tooltip>
            <Tooltip message="Vite">
              <Vite />
            </Tooltip>
            <Tooltip message="React">
              <span className="dark:text-[color:#61DAFB] text-sky-700">
                <SiReact size={32} title="React" />
              </span>
            </Tooltip>
            <Tooltip message="Swagger / Open API">
              <span className="text-gray-700 bg-[color:#8bf62a]  rounded-full">
                <SiSwagger size={32} />
              </span>
            </Tooltip>
            <Tooltip message="asp .NET core">
              <Dotnet />
            </Tooltip>
          </div>
          <div className="w-80">
            Features: Infinite scrolling, cursor based server side pagination, main table virtualized, front end uses
            Swagger generated api sdk
          </div>
        </div>
        {/* <LottieAnim /> */}

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
