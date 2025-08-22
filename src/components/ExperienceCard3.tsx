import { Tooltip } from "./Tooltip";
import { SiSpringboot } from "@icons-pack/react-simple-icons";
import { SiJavascript } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Bootstrap, Java } from "@/lib/svgs";

const WORK: WorkType[] = [
  {
    text: "Back",
    url: "https://github.com/FTmiles/busstation-back",
  },
  {
    text: "Front",
    url: "https://github.com/FTmiles/busstation-front",
  },

  {
    text: "Production",
    url: "https://anybus.online/",
  },
];

type WorkType = {
  text: string;
  url: string;
};

export const ExperienceCard3 = () => {
  return (
    <div className="bg-white/20 flex w-full gap-10">
      <div>2024</div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <div>Anyksciai bus station webapp</div>
          <div className="flex gap-3">
            {WORK.map(({ text, url }) => (
              <Resource key={text} text={text} url={url} />
            ))}
          </div>
          <div className="w-80 flex gap-3 pt-4">
            <Tooltip message="Javascript">
              <span className="text-amber-300 bg-black">
                <SiJavascript size={32} />
              </span>
            </Tooltip>
            <Tooltip message="Spring Boot - Libra">
              <span className="relative">
                <span style={{}} className="absolute w-5 h-5 left-1.5 top-1.5 rounded-full bg-white z-0" />
                <SiSpringboot size={32} color="#6db33f" className="relative z-30" />
              </span>
            </Tooltip>
            <Tooltip message="React via create-react-app">
              <span className="dark:text-[color:#61DAFB] text-sky-700">
                <SiReact size={32} title="React" />
              </span>
            </Tooltip>
            <Tooltip message="Bootstrap">
              <Bootstrap />
            </Tooltip>
            <Tooltip message="Java">
              <Java />
            </Tooltip>
          </div>
        </div>
        <div>nGinx, Namecheapp ubuntu VPS, Github actions set up CI/CD pipeline</div>
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
