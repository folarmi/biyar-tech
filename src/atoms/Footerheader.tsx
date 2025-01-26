import { TextProp } from "../utils/types";

const Footerheader = ({ text, className }: TextProp) => {
  return (
    <div>
      <p
        className={`manrope font-bold text-sm pb-4 text-gray_600 ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { Footerheader };
