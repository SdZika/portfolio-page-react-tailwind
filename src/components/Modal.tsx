import { FC, useRef, MouseEvent } from "react";


interface ModalProps {
    skill: string;
    onClose: () => void;
}

export const Modal:FC <ModalProps> = ({skill, onClose}) => {

   
    
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (e: MouseEvent<HTMLDivElement>) => {
      if (modalRef.current && modalRef.current === e.target) {
        onClose();
      }
    };
  
    if (!skill) return null; 
    
  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="mt-10 flex-col gap-5  bg-[#161616] p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-primary-color mb-4">{skill}</h2>
            <p className="text-gray-400">Description {skill}</p>
        </div>
        
    </div>
  )
}
