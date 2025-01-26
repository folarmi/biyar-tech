import heroImage from "../assets/images/hero_section_banner.svg";
import { SubText } from "../atoms/SubText";
import { ExploreProjects } from "./buttons/ExploreProjects";
import { GetStarted } from "./buttons/GetStarted";

const HeroSection = () => {
  return (
    <section className="bg-gray_200">
      <div className="mx-auto w-[1116px]">
        <p className="pt-14 pb-[30px] text-secondary font-semibold text-[109.66px] leading-[107.7px]">
          We turn your ideas <br /> into value.
        </p>

        <div className="flex items-center justify-between mb-20">
          <SubText
            text="We are a Software development agency based in Texas. We turn your
            ideas into value, we believe ideas shape the future."
            className="w-[430px]"
          />

          <section className="flex items-center">
            <GetStarted />
            <ExploreProjects />
          </section>
        </div>

        <div className="pb-[52px]">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
