import { TextProp } from "../utils/types";

const JoinOurTeamSubText = ({ text, className }: TextProp) => {
  return (
    <p
      className={`manrope font-medium leading-[25.6px] text-gray_300 text-base pb-2 w-[300px] lg:w-[527px] justify-start ${className}`}
    >
      {text}
    </p>
  );
};

export { JoinOurTeamSubText };
