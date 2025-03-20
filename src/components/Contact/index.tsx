import ContactInput from './ContactInput';

export default function Contact() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <ContactInput placeholder="이메일 주소" icon="mail" />
      <ContactInput placeholder="보내는 분" icon="person" />
      <ContactInput placeholder="제목" icon="title" />
      <div className="relative w-1/3 px-2">
        <textarea
          placeholder="내용"
          className="w-full h-60 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3bd2f6]"
        />
        <button
          type="submit"
          className="text-center w-full border bg-cyan-400 text-white font-semibold rounded-md px-4 py-1"
        >
          전송
        </button>
      </div>
    </div>
  );
}
