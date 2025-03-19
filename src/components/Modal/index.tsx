'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

type ModalPropsType = {
  children: ReactNode;
};

export default function Modal({ children }: ModalPropsType) {
  const router = useRouter();

  const closeModal = () => router.back();
  return (
    <motion.div
      className="fixed z-10 top-0 left-0 h-screen w-screen bg-black/10 backdrop-blur-sm flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
    >
      <div className=" bg-white w-1/2 h-5/6 shadow-2xl shadow-black/75 rounded-2xl py-4 px-8 flex flex-col gap-4">
        <div className="text-right border-b-2">
          <motion.span
            className="material-symbols-rounded icon-style cursor-pointer"
            onClick={closeModal}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
          >
            close
          </motion.span>
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </motion.div>
  );
}
