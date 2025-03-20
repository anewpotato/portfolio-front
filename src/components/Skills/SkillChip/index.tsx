import Image from 'next/image';

type SkillChipPropsType = {
  label: string;
};

export default function SkillChip({ label }: SkillChipPropsType) {
  return (
    <span className="w-fit py-1.5 justify-between flex gap-3 border-2 rounded-full bg-[#8795dd] text-white font-semibold text-sm">
      <Image
        alt=""
        className="ml-3"
        src={`/image/skills/${label}.svg`}
        width={20}
        height={20}
        style={{ height: 'auto' }}
      />
      <span className="mr-3">
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </span>
    </span>
  );
}
