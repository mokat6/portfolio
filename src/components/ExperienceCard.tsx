import { Tooltip } from "./Tooltip";
import { Cta, TechStackItem } from "@/data/workExperience1";

type ExperienceCardProps = {
  title: string;
  ctas: Cta[];
  features: string[];
  techstack: TechStackItem[];
  graphics?: React.ReactNode;
};

export const ExperienceCard = ({ features, graphics, techstack, ctas, title }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-3 border">
      <div className="font-bold text-2xl">{title}</div>
      <div className="flex gap-3 flex-wrap">
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

      <div className="flex md:flex-row flex-col w-full gap-10">
        <div className="flex flex-col gap-5">
          <div className=" flex flex-wrap gap-3 pt-4   ">
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

          <div className="">
            <h2 className="text-xl font-bold">Features:</h2>
            <ul>
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        {graphics}
      </div>
    </div>
  );
};
