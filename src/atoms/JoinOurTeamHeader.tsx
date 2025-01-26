import { TextProp } from "../utils/types";

type ExtendedTextProp = TextProp & {
  img?: string;
};

const JoinOurTeamHeader = ({ text, className, img }: ExtendedTextProp) => {
  return (
    <div className="flex items-center mb-2">
      <img src={img} className={`${img ? "mr-2" : ""}`} />
      <p className={`manrope font-bold text-base ${className}`}>{text}</p>
    </div>
  );
};

export { JoinOurTeamHeader };
