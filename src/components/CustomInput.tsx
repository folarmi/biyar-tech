interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  className?: string; // Additional custom styles
  textarea?: boolean;
}

const CustomInput = ({
  className,
  errorMessage,
  label,
  onChange,
  placeholder,
  type,
  value,
  textarea,
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-2 mb-[10px] ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray_1200 geist">
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          //   onChange={onChange}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow placeholder:text-muted placeholder:font-normal ${
            errorMessage ? "border-red-500 focus:ring-red-500" : ""
          }`}
          rows={4} // Default number of rows for the textarea
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow placeholder:text-muted placeholder:font-normal ${
            errorMessage ? "border-red-500 focus:ring-red-500" : ""
          }`}
        />
      )}
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export { CustomInput };
