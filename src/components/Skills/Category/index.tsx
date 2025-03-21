import { Fragment } from 'react';

type CategoryPropsType = {
  list: string[];
  selectedIndex: number;
  handleOnClick: (index: number) => void;
};

export default function Category({
  list,
  selectedIndex,
  handleOnClick,
}: CategoryPropsType) {
  if (list.length === 0) return null;

  return (
    <div className="text-end">
      {list.map((label, index) => (
        <Fragment key={label}>
          <button
            className={`${selectedIndex === index ? 'font-extrabold dark:text-indigo-400' : 'text-gray-800/95 dark:text-white'} `}
            type="button"
            onClick={() => handleOnClick(index)}
          >
            {label}
          </button>
          {index !== list.length - 1 && (
            <span className="mx-2 text-gray-400">|</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
