import React, { FC, useState, useCallback } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hoveredSkill, setHoveredSkill] = useState<PropSkill | null>(null);

  const handleMouseEnter = useCallback((skill: PropSkill) => {
    setHoveredSkill(skill);
    setIsModalOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    console.log("Mouse left the element");
    setIsModalOpen(false);
    setHoveredSkill(null);
  }, []);

  return (
    <div className="border border-gray-600 bg-black-300 text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My Tech <br /> Stack
      </h2>
      {skillList.map((skill) => (
        <div
          key={skill.id}
          onMouseEnter={() => handleMouseEnter(skill)}
          onMouseLeave={() => handleMouseLeave()}
          className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img src={skill.src} alt={skill.name} />
          <p className="mt-2">{skill.name}</p>
        </div>
      ))}
      {isModalOpen && hoveredSkill && (
        <Modal skill={hoveredSkill} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};
