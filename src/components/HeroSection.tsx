import heroImage from "../assets/images/hero_section_banner.svg";
import { SubText } from "../atoms/SubText";
import { ExploreProjects } from "./buttons/ExploreProjects";
import { GetStarted } from "./buttons/GetStarted";

const HeroSection = () => {
  return (
    <section className="bg-gray_200">
      <div className="mx-auto lg:w-[1116px]">
        <p className="px-4 lg:px-0 pt-8 lg:pt-14 pb-[30px] text-secondary font-semibold text-4xl lg:text-[109.66px] lg:leading-[107.7px]">
          We turn your ideas <br /> into value.
        </p>

        <div className="px-4 lg:px-0 flex flex-col lg:flex-row lg:items-center justify-between mb-20">
          <SubText
            text="We are a Software development agency based in Texas. We turn your
            ideas into value, we believe ideas shape the future."
            className="w-[300px] lg:w-[430px]"
          />

          <section className="mt-6 lg:mt-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            <GetStarted />
            <ExploreProjects />
          </section>
        </div>

        <div className="pb-[52px] w-auto">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
