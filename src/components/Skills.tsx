import React, { FC, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { skillList } from "./Data/SkillList";

interface Skill {
  id: number;
  name: string;
  link: string;
  src: string;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  useEffect(() => {}, []);

  const handleMouseEnter = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const handleMouseLeave = () => {
    setSelectedSkill(null);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <div className=" border border-gray-600 bg-black-300 text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
          My Tech <br /> Stack
        </h2>
        {skills.map((skill, index) => (
          <div
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={handleMouseLeave}
            key={skill.id}
            className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]"
          >
            <a href={skill.link} target="_blank" rel="noreferrer">
              <img src={skill.src} alt="html" />
            </a>
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <Modal skill={selectedSkill.name} onClose={handleCloseModal} />
      )}
    </>
  );
};
