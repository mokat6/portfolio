import { LottieAnim } from "./LottieAnim";
import { SiTypescript, SiTailwindcss } from "@icons-pack/react-simple-icons";
import SpringBoot from "../../public/tech-stack/spring boot.svg";
import Bootstrap from "../../public/tech-stack/bootstrap.svg";
import Java from "../../public/tech-stack/java.svg";
import Radix from "../../public/tech-stack/radix.png";
import Image from "next/image";
import { Tooltip } from "./Tooltip";
import { SiSpringboot } from "@icons-pack/react-simple-icons";
import { SiJavascript } from "@icons-pack/react-simple-icons";
import { SiBootstrap } from "@icons-pack/react-simple-icons";
import { SiReact } from "@icons-pack/react-simple-icons";

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
              <SiJavascript size={32} color="#F7DF1E" />
            </Tooltip>
            <Tooltip message="Spring Boot - Libra">
              <SiSpringboot size={32} color="#6db33f" />
            </Tooltip>
            <Tooltip message="React via create-react-app">
              <SiReact size={32} color="#61DAFB" title="React" />
            </Tooltip>
            <Tooltip message="Bootstrap">
              <Image src={Bootstrap} alt="Spring Boot" width={32} height={32} />
            </Tooltip>
            <Tooltip message="Java">
              <Image src={Java} alt="Java" width={32} height={32} />
            </Tooltip>
            <Tooltip message="Radix primitives">
              <SiBootstrap size={32} color="#7952B3" title="Bootstrap" />
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
