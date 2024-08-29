import React, { FC } from 'react'

interface PropTitle {
    title: string;
}

export const SkillsTitle: FC <PropTitle> = ({title}) => {
  return (
    <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
       {title}
      </h2>
  )
}
