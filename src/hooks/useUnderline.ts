import { RefObject, useEffect, useState } from 'react';

type UnderlineType = {
  width: number;
  left: number;
};

/**
 * Navigation Underline style을 구하는 hook.
 * @param itemRefs Navigation Element Ref 목록.
 * @param index 현재 선택된 index.
 * @returns {UnderlineType}
 */
export default function useUnderline(
  itemRefs: RefObject<(HTMLElement | null)[]>,
  index: number,
) {
  const [underlineStyle, setUnderlineStyle] = useState<UnderlineType>({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    if (index !== null && itemRefs.current[index]) {
      const selectedItem = itemRefs.current[index];
      if (selectedItem) {
        const { offsetWidth, offsetLeft } = selectedItem;
        setUnderlineStyle({ width: offsetWidth, left: offsetLeft - 25 });
      }
    }
  }, [index]);

  return underlineStyle;
}
