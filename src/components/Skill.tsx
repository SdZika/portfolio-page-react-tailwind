import React from "react";
import { useState } from "react";
import { Modal } from "./Modal";

interface PropSkill {
  id: number;
  name: string;
  src: string;
  link: string;
  content: string;
}

export const Skill = ({ skill }: any) => {
  const [activeSkill, setActiveSkill] = useState<PropSkill | null>(null);

  return (
    <>
      <div
        key={skill.id}
        onMouseEnter={() => setActiveSkill(skill)}
        onMouseLeave={() => setActiveSkill(null)}
        className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform duration-300 hover:scale-105 cursor-pointer "
      >
        <img src={skill.src} alt={skill.name} className="z-0" />
        <p className="mt-2 z-0">{skill.name}</p>
        {activeSkill?.id === skill.id && (
          <Modal skill={skill} closeModal={() => setActiveSkill(null)} />
        )}
      </div>
    </>
  );
};
