type ExperienceCardTextProps = {
  bullets: string[];
  title: string;
  date: string;
};

export const ExperienceCardText = ({ bullets, title, date }: ExperienceCardTextProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="font-bold text-2xl">{title}</div>
        <div className="">{date}</div>
      </div>
      <ul className="list-disc list-inside pl-6">
        {bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};
