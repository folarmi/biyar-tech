import { BoldText } from "../atoms/BoldText";
import { RoundedButton } from "../components/buttons/RoundedButton";
import { Layout } from "../components/Layout";
import whiteArrow from "../assets/icons/white_arrow_circle_right.svg";
import aboutUs from "../assets/images/aboutUs.svg";
import biyarTechTwo from "../assets/images/biyarTechTwo.svg";
import { FifthSection } from "../components/FifthSection";
import { FourthSection } from "../components/FourthSection";

const AboutUs = () => {
  return (
    <Layout>
      <div className="">
        {/* First Section */}
        <section className="bg-gray_200 flex flex-col items-center pt-36">
          <RoundedButton text="About Us" className="w-fit" />
          <p className="w-[1116px] mx-auto pt-7 font-medium text-[41.89px] leading-[56px] text-gray_700 pb-56">
            <span className="font-semibold text-secondary">
              Driven by Purpose, Powered by Passion,
            </span>{" "}
            At Biyar Tech, we craft innovative software solutions that bring
            ideas to life. Specializing in product design, user experience, and
            cutting-edge development, we transform concepts into seamless
            digital experiences. Our team blends creativity, strategy, and
            technology to deliver impactful products tailored to your unique
            needs. Let’s build the future together.
          </p>
        </section>

        {/* Second Section */}
        <section className="w-[1116px] mx-auto bg-white pt-52">
          <div className=" flex items-center justify-center ">
            <div>
              <BoldText
                text="We Help Startups on a Budget Scale Fast and Smart."
                className="w-[571px] pb-7"
              />

              <p className="font-semibold text-base pb-[2px]">
                Custom Web and Mobile Apps
              </p>
              <p className="manrope font-medium text-base leading-6 w-[528px]">
                Detailed insights into company performances creating mobile apps
                lorem ipsum dolor and we build mobile apps and custom websites
                that are SEO-friendly when they get built.
              </p>

              <p className="font-semibold text-base pb-[2px] pt-7">
                Product Design and Branding
              </p>
              <p className="manrope font-medium text-base leading-6 w-[528px]">
                Detailed insights into company performances creating mobile apps
                lorem ipsum dolor and we build mobile apps and custom websites
                that are SEO-friendly when they get built.
              </p>

              <div className="w-fit flex items-center rounded-[50px] px-6 py-4 border border-biyar_purple bg-biyar_purple mt-7">
                <p className="font-normal text-lg mr-[10px] text-white">
                  Get Started
                </p>
                <img src={whiteArrow} alt="whiteArrow" />
              </div>
            </div>

            <div className="">
              <img src={aboutUs} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-11">
            <img src={biyarTechTwo} />
          </div>
        </section>

        <FifthSection />
        <FourthSection ifImage={false} />
      </div>
    </Layout>
  );
};

export { AboutUs };
