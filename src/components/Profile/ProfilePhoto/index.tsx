import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <div className="flex justify-center mb-9">
      <div className="flex rounded-full items-center justify-center w-44 h-44 bg-[#DBD9D9]">
        <Image
          src="/image/profile/user.png"
          width={104}
          height={110}
          alt="profile_photo_img"
          style={{ width: 104, height: 110 }}
        />
      </div>
    </div>
  );
}
