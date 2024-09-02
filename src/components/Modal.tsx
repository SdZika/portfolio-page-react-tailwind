import { FC } from "react";

interface ModalProps {
  skill: {
    name: string;
    content: string;
    link: string;
  };
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ skill, closeModal }) => {
  
  return (
    <div className=" bg-black flex justify-center items-center w-[400px] z-50 p-4">
      <div 
          className="mt-10 flex flex-col gap-5  bg-[#161616] p-6 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 "
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-color mb-4">
          {skill.name}
        </h2>
        <p className="text-gray-400 mb-4 text-sm sm:text-base">
          This is the modal content for {skill.content}
        </p>
        <a
          href={skill.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline text-sm sm:text-base"
        >
          Learn more about {skill.name}
        </a>
        <button
          className="mt-2 px-4 py-2 bg-primary-color text-white rounded text-sm sm:text-base"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
