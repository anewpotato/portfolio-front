type ContactInputPropsType = {
  placeholder: string;
  icon: string;
};

export default function ContactInput({
  placeholder,
  icon,
}: ContactInputPropsType) {
  return (
    <div className="relative w-1/3 px-2">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-10 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3bd2f6]"
      />
      <div className="material-symbols-rounded absolute left-3 top-1/2 transform -translate-y-1/2">
        {icon}
      </div>
    </div>
  );
}
