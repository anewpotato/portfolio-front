import Image from 'next/image';
import { ReactNode } from 'react';

type DetailsPropsType = {
  src: string;
  label: string;
  children: ReactNode;
  width?: number;
  height?: number;
};

export default function Details({
  src,
  label,
  children,
  width = 50,
  height = 50,
}: DetailsPropsType) {
  return (
    <div className="flex divide-x-4">
      <div className="flex flex-col gap-1 basis-1/6 items-center">
        <Image
          alt=""
          src={src}
          width={width}
          height={height}
          style={{ height: 'auto' }}
        />
        <span className="font-bold">{label}</span>
      </div>
      <div className="basis-5/6 px-3 py-1 whitespace-pre-line text-sm">
        {children}
      </div>
    </div>
  );
}
