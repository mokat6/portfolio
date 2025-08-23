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
          <div className="w-80 flex gap-3 pt-4"></div>
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
