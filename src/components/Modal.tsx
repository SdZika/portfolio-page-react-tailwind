import { FC } from "react";

interface ModalProps {
  skill: {
    name: string;
    content: string;
    link: string;
  } | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal:FC<ModalProps> = ({ skill, setIsModalOpen } :any) => {
  if (!skill) return null;

  return (
    <div className="z-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5  bg-[#161616] p-6 rounded-xl shadow-md max-w-md sm:max-w-lg lg:max-w-xl max-h-[80vh] overflow-y-auto transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-primary-color mb-4">{skill.name}</h2>
        <p className="text-gray-400 mb-4">This is the modal content for {skill.content}</p>
        <a href={skill.link} target="_blank" rel="noreferrer" className="text-blue-500 underline">
          Learn more about {skill.name}
        </a>
        <button
          className="mt-2 px-4 py-2 bg-primary-color text-white rounded hover:bg-red-600"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};