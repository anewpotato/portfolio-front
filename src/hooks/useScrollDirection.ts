import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤 방향을 반환하는 hook.
 * @returns {up | down}
 */
export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down');
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollDir;
}
