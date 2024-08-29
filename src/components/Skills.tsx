import React, { FC, useState } from "react";

import { skillList } from "./Data/SkillList";
import { SkillsTitle } from "./Data/SkillsTitle";
import { DataMap } from "./Data/DataMap";

interface PropSkill {
  id: number;
  name: string;
  src: string;
  link: string;
  content: string;
}

export const Skills: FC = () => {
  const [activeSkill, setActiveSkill] = useState<PropSkill | null>(null);

  const handleMouseEnter = (skill: PropSkill) => {
    setActiveSkill(skill);
  };

  const handleMouseLeave = () => {
    setActiveSkill(null);
  };

  const closeModal = () => {
    setActiveSkill(null);
  };

  return (
    <div className="border border-gray-600 bg-black-300 text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <div className="flex flex-col">
        <SkillsTitle title="My Tech" />
        <SkillsTitle title="Stack" />
      </div>

      <DataMap
        datas={skillList}
        activeSkill={activeSkill}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        closeModal={closeModal}
      />
    </div>
  );
};
