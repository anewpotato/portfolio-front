import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <div className="flex justify-center mb-9">
      <div className="relative flex rounded-full items-center justify-center w-44 h-44 bg-[#DBD9D9]">
        <Image
          className="rounded-full border-2 border-black/45"
          alt="profile_photo_img"
          src="/image/profile/yuseungjong.jpg"
          fill
          sizes="(max-width: 768px) 100vw"
        />
      </div>
    </div>
  );
}
