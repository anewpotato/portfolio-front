import { MotionProps, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ButtonPropsType {
  children: string;
  onButtonClick?: () => void;
}

export default function Button({
  children,
  onButtonClick = () => {},
  animate,
}: ButtonPropsType & MotionProps) {
  const [isIconLoaded, setIsIconLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsIconLoaded(true);
    });
  }, []);

  if (!isIconLoaded) {
    return null;
  }

  return (
    <motion.button
      type="button"
      className="material-symbols-rounded rounded-full sm:p-1 md:p-2 lg:p-3 cursor-pointer border bg-emerald-300 text-white icon-style icon-weight-700 icon-optical-size-24"
      onClick={onButtonClick}
      animate={animate}
    >
      {children}
    </motion.button>
  );
}
