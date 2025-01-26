import { TextProp } from "../utils/types";

const JoinOurTeamSectionHeader = ({ text, className }: TextProp) => {
  return (
    <p className={`font-semibold text-[41.89px] leading-[48px] ${className}`}>
      {text}
    </p>
  );
};

export { JoinOurTeamSectionHeader };
