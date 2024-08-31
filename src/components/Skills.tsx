import React, { FC } from "react";

import { skillList } from "./Data/SkillList";
import { SkillsTitle } from "./Data/SkillsTitle";
import { Skill } from "./Skill";

export const Skills: FC = () => {
  return (
    <div className="border border-gray-600 bg-black-300 text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center">
      <div className="felx flex-col">
        <SkillsTitle title="My Tech" />
        <SkillsTitle title="Stack" />
      </div>
      {skillList.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
};
