import { TextProp } from "../utils/types";

const BoldText = ({ text, className }: TextProp) => {
  return (
    <div>
      <p
        className={`px-4 lg:px-0 font-semibold text-4xl lg:text-[67.77px] leading-10 lg:leading-[67.79px] pb-4 lg:pb-8 ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { BoldText };
