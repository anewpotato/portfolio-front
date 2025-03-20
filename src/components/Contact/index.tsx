'use client';

import { useState, useRef } from 'react';
import { submitContact } from '@src/actions/contact';
import ContactInput from './ContactInput';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage('');

    if (!formRef.current) return;

    const result = await submitContact(new FormData(formRef.current));

    if (result.success) {
      formRef.current.reset();
    }
    setMessage(result.message);
    setIsSubmitting(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col w-full justify-center items-center gap-4 sm:mt-8 lg:mt-0 gform"
    >
      <ContactInput
        placeholder="이메일 주소"
        icon="mail"
        name="email"
        type="email"
      />
      <ContactInput placeholder="보내는 분" icon="person" name="name" />
      <ContactInput placeholder="제목" icon="title" name="title" />
      <div className="relative sm:w-full lg:w-1/3 lg:px-2">
        <textarea
          placeholder="내용"
          name="message"
          className="w-full h-60 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3bd2f6]"
        />
        <button
          type="submit"
          className={`text-center w-full border ${
            isSubmitting ? 'bg-gray-400' : 'bg-cyan-400'
          } text-white font-semibold rounded-md px-4 py-1`}
          disabled={isSubmitting}
        >
          {isSubmitting ? '전송 중입니다...' : '전송'}
        </button>
      </div>

      {message && (
        <p
          className={`mt-2 text-sm ${
            message.includes('성공') ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
