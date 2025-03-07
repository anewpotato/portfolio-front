import { ProfileInformationType } from '@src/types/contents/profile';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileInformation({
  src,
  alt,
  text,
  type,
}: ProfileInformationType) {
  return (
    <div className="flex gap-4 border-b-2 border-dashed mt-2">
      <Image className="pb-1" src={src} width={24} height={24} alt={alt} />
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
