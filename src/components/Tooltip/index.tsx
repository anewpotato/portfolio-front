import { TooltipType } from '@src/types';

export default function Tooltip({ children, text = '' }: TooltipType) {
  if (text.length === 0) return children;
  return (
    <div className="group/tooltip w-fit relative">
      {children}
      <div className="absolute sm:-top-20 md:-top-12 lg:-top-16 xl:-top-12 left-1/2 -translate-x-1/2 min-w-24 text-center invisible group-hover/tooltip:visible rounded bg-black opacity-85 text-white p-2 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-['']">
        {text}
      </div>
    </div>
  );
}
