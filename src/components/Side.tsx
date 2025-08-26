import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SwitchMoon } from "./SwitchMoon";
import clsx from "clsx";

export const Side = ({ className = "" }: { className?: string }) => {
  return (
    <div className={clsx("bg-bg-side p-10 flex flex-col items-center gap-5 rounded shadow-xl", className)}>
      <Image id="userPhoto" src="/image/prof.jpg" alt="User Photo" width={140} height={140} className="rounded-full" />
      <p className="text-xl text-nowrap">{`<Modestas.Katinas />`}</p>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <FaLinkedin className="text-4xl " />
          <a href="https://www.linkedin.com/in/10c/" target="_blank">
            @l0c
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="text-4xl" />
          <a href="https://github.com/mokat6" target="_blank">
            @mokat6
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="text-4xl" />
          <a href="https://github.com/FTmiles" target="_blank">
            @FTmiles
          </a>
        </div>
        <div>+370 6940 9958</div>
        <div>mokats@proton.me</div>
        <SwitchMoon />
      </div>
    </div>
  );
};
