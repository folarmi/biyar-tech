import React from "react";
import searchIcon from "../assets/icons/search.svg";

interface SearchInputProps {
  placeholder?: string; // Placeholder text for the input
  value?: string; // Current input value
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler for input
  className?: string; // Additional custom styles
  onSearch?: () => void; // Optional callback when the search icon/button is clicked
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Type a command or search...",
  value,
  onChange,
  className,
  onSearch,
}) => {
  return (
    <div
      className={`bg-white w-[656px] flex items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-shadow ${className}`}
    >
      <button
        type="button"
        onClick={onSearch}
        className="p-1"
        aria-label="Search"
      >
        <img
          src={searchIcon}
          alt="Search"
          className="object-contain hover:opacity-80 transition-opacity"
        />
      </button>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 px-2 py-1 text-sm text-gray-700 placeholder-muted bg-transparent outline-none geist"
      />
    </div>
  );
};

export { SearchInput };
