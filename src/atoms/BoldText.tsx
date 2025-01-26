import { TextProp } from "../utils/types";

const BoldText = ({ text, className }: TextProp) => {
  return (
    <div>
      <p
        className={`font-semibold text-[67.77px] leading-[67.79px] pb-8 ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { BoldText };
