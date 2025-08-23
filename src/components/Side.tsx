import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SwitchMoon } from "./SwitchMoon";

export const Side = () => {
  return (
    <div className="bg-white/40 p-10 flex flex-col items-center sticky top-0">
      <div className="flex flex-col gap-5">
        <Image
          id="userPhoto"
          src="/image/profile-pic.jpg"
          alt="User Photo"
          width={140}
          height={140}
          className="rounded-full"
        />
        <p className="text-xl text-nowrap">{`<Stilla.Gorilla />`}</p>

        <div className="flex items-center">
          <FaLinkedin className="text-4xl" />
          <a href="https://www.linkedin.com/in/10c/" target="_blank">
            @l0c
          </a>
        </div>
        <div className="flex items-center">
          <FaGithub className="text-4xl" />
          <a href="https://github.com/mokat6" target="_blank">
            @mokat6
          </a>
        </div>
        <div className="flex items-center">
          <FaGithub className="text-4xl" />
          <a href="https://github.com/FTmiles" target="_blank">
            @FTmiles
          </a>
        </div>
        <div>15688779631</div>
        <div>mail@mail.com</div>
        <SwitchMoon />
      </div>
    </div>
  );
};
