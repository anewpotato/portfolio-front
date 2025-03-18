import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
