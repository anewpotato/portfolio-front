type ContactInputPropsType = {
  placeholder: string;
  icon: string;
  name: string;
  type?: string;
};

export default function ContactInput({
  placeholder,
  icon,
  name,
  type = 'text',
}: ContactInputPropsType) {
  return (
    <div className="relative sm:w-full lg:w-1/3 lg:px-2">
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3bd2f6] dark:bg-slate-400 dark:placeholder-white"
      />
      <div className="material-symbols-rounded absolute left-3 top-1/2 transform -translate-y-1/2 dark:text-black">
        {icon}
      </div>
    </div>
  );
}
