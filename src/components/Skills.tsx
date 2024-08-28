import React, { FC, useState } from "react";
import { Modal } from "./Modal";
import { skillList } from "./Data/SkillList";

interface PropSkill {
  id: number;
  name: string;
  src: string;
  link: string;
  content: string;
}

export const Skills: FC = () => {
  const [activeSkill, setActiveSkill] = useState<PropSkill | null>(null);


  return (
    <div className="border border-gray-600 bg-black-300 text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My Tech <br /> Stack
      </h2>
      {skillList.map((skill) => (
        <div
          key={skill.id}
          onMouseEnter={() => setActiveSkill(skill)}
          onMouseLeave={() => setActiveSkill(null)}
          className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform duration-300 hover:scale-105 cursor-pointer "
        >
          <img src={skill.src} alt={skill.name} className="z-0"/>
          <p className="mt-2 z-0">{skill.name}</p>
          {activeSkill?.id === skill.id && <Modal skill={skill} closeModal={() => setActiveSkill(null)}/>}
        </div>
        
      ))}
      
    </div>
  );
};
