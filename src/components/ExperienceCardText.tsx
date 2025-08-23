type ExperienceCardTextProps = {
  bullets: string[];
  title: string;
  date: string;
};

export const ExperienceCardText = ({ bullets, title, date }: ExperienceCardTextProps) => {
  return (
    <div className=" flex gap-8 border">
      <div className="flex flex-col">
        <div className="font-bold text-2xl">{title}</div>
        <div className="">{date}</div>
        <ul className="list-disc list-inside pl-6">
          {bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
