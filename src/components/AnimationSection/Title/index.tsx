import { pacificoFont } from '@src/constant/fonts';
import Image from 'next/image';

export default function Title({ title }: { title: string }) {
  return (
    <>
      <Image
        alt=""
        className="absolute top-2 left-10"
        src="/image/Vector 1.svg"
        width={150}
        height={30}
      />
      <Image
        alt=""
        className="absolute top-10 left-10"
        src="/image/Vector 2.svg"
        width={150}
        height={30}
      />
      <div className="flex w-11/12 absolute top-6 left-14">
        <span className={` text-4xl ${pacificoFont.className}`}>{title}</span>
        <hr className="ml-6 w-full border-t-2 border-gray-300 my-4" />
      </div>
    </>
  );
}
