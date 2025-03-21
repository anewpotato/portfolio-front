import useRedux from '@src/hooks/useRedux';
import Image from 'next/image';
import Link from 'next/link';

type ProfileInformationType = {
  src: string;
  alt: string;
  text: string;
  type: 'text' | 'link';
};

export default function ProfileInformation({
  src,
  alt,
  text,
  type,
}: ProfileInformationType) {
  const [isDarkMode] = useRedux<boolean>('darkmode');
  let srcString = src;

  if (isDarkMode) {
    const splitArr = src.split('.');
    splitArr[0] += '_dark';
    srcString = splitArr.join('.');
  }
  return (
    <div className="flex gap-4 border-b-2 border-dashed mt-2">
      <Image
        className="pb-1"
        src={srcString}
        width={24}
        height={24}
        alt={alt}
        style={{ width: 'auto', height: 24 }}
      />
      <span className="font-semibold ">
        {type === 'link' ? (
          <Link className="hover:text-sky-400" href={text} target="_blank">
            {text}
          </Link>
        ) : (
          text
        )}
      </span>
    </div>
  );
}
