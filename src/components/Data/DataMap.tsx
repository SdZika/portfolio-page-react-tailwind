import React, { FC } from 'react';
import { Modal } from '../Modal'; // Import your Modal component

interface PropSkill {
  id: number;
  name: string;
  src: string;
  link: string;
  content: string;
}

interface DataProp {
  datas: PropSkill[];
  activeSkill: PropSkill | null;
  onMouseEnter: (skill: PropSkill) => void;
  onMouseLeave: () => void;
  closeModal: () => void;
}

export const DataMap: FC<DataProp> = ({ datas, activeSkill, onMouseEnter, onMouseLeave, closeModal }) => {
  return (
    <>  
      {datas.map((data) => (
        <div
          key={data.id}
          onMouseEnter={() => onMouseEnter(data)} // Pass the full skill object
          onMouseLeave={onMouseLeave}
          className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img src={data.src} alt={data.name} />
          <p className="mt-2">{data.name}</p>
        </div>
      ))}

      {/* Render Modal outside of the map to ensure only one modal is shown */}
      {activeSkill && (
        <Modal skill={activeSkill} closeModal={closeModal} />
      )}
    </>
  );
};

