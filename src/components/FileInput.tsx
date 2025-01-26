import React from "react";

interface FileInputProps {
  label?: string; // Optional label for the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // File input change handler
  className?: string; // Additional custom styles
  errorMessage?: string; // Error message to display
  accept?: string; // Acceptable file types (e.g., ".png, .jpg, .jpeg, .pdf")
  multiple?: boolean; // Allow multiple file uploads
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  onChange,
  className,
  errorMessage,
  accept,
  multiple = false, // Defaults to single file upload
}) => {
  return (
    <div className={`flex flex-col gap-2 mb-4 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray_1200 geist">
          {label}
        </label>
      )}
      <input
        type="file"
        onChange={onChange}
        accept={accept}
        multiple={multiple}
        className="block w-full text-sm text-gray_1300 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-light file:text-primary-dark hover:file:bg-primary-dark"
      />
      {errorMessage && (
        <span className="text-sm text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export { FileInput };
