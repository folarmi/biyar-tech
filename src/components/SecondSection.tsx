import { BoldText } from "../atoms/BoldText";
import { LetsTalk } from "./buttons/LetsTalk";
import { OverlappingCards } from "./OverlappingCards";
// import customOne from "../assets/images/customOne.svg";
// import customTwo from "../assets/images/customTwo.svg";
// import customThree from "../assets/images/customThree.svg";

const SecondSection = () => {
  // bg-gray_400
  return (
    <div className="">
      <section className="pt-8 lg:pt-16 lg:w-[571px] mx-auto">
        <BoldText text="We Help Startups on a Budget Scale Fast and Smart." />
      </section>

      <LetsTalk />

      <OverlappingCards />
    </div>
  );
};

export { SecondSection };
