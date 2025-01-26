import { TextProp } from "../utils/types";

const SubText = ({ text, className }: TextProp) => {
  return (
    <div>
      <p className={`manrope text-base font-medium leading-6 ${className}`}>
        {text}
      </p>
    </div>
  );
};

export { SubText };
