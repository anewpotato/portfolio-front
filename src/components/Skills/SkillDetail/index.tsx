import Image from 'next/image';

type SkillDetailPropsType = {
  label: string;
  description: string;
};

export default function SkillDetail({
  label,
  description,
}: SkillDetailPropsType) {
  return (
    <div className="flex divide-x-4">
      <div className="flex flex-col gap-1 basis-1/6 items-center">
        <Image
          alt=""
          src={`/image/skills/${label}.svg`}
          width={50}
          height={50}
          style={{ height: 'auto' }}
        />
        <span className="font-bold">{label}</span>
      </div>
      <div className="basis-5/6 px-3 py-1 whitespace-pre-line text-sm">
        {description}
      </div>
    </div>
  );
}
