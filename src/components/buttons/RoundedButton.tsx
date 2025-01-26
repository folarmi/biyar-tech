import { TextProp } from "../../utils/types";

const RoundedButton = ({ text, className }: TextProp) => {
  return (
    <div
      className={`flex items-center rounded-[50px] px-6 py-2 border border-gray_300 bg-white ${className}`}
    >
      <p className="font-normal text-lg mr-[10px] text-gray_300 uppercase">
        {text}
      </p>
    </div>
  );
};

export { RoundedButton };
