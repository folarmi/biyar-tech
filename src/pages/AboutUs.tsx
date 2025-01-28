import { BoldText } from "../atoms/BoldText";
import { RoundedButton } from "../components/buttons/RoundedButton";
import { Layout } from "../components/Layout";
import whiteArrow from "../assets/icons/white_arrow_circle_right.svg";
import aboutUs from "../assets/images/aboutUs.svg";
import { FifthSection } from "../components/FifthSection";
import { FourthSection } from "../components/FourthSection";

const AboutUs = () => {
  return (
    <Layout>
      <div className="">
        {/* First Section */}
        <section className="bg-gray_200 flex flex-col items-center pt-6 lg:pt-36 px-8 lg:px-0">
          <RoundedButton text="About Us" className="w-fit" />
          <p className="lg:w-[1116px] mx-auto pt-7 font-medium text-3xl lg:text-[41.89px] leading-10 lg:leading-[56px] text-gray_700 pb-20 lg:pb-56">
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
        <section className="px-8 lg:px-0 lg:w-[1116px] mx-auto bg-white pt-20 lg:pt-52 mb-36 lg:mb-80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-center ">
            <div>
              <BoldText
                text="We Help Startups on a Budget Scale Fast and Smart."
                className="w-[330px] lg:w-[571px] pb-7 px-0"
              />

              <p className="font-semibold text-base pb-[2px]">
                Custom Web and Mobile Apps
              </p>
              <p className="manrope font-medium text-base leading-6 lg:w-[528px]">
                Detailed insights into company performances creating mobile apps
                lorem ipsum dolor and we build mobile apps and custom websites
                that are SEO-friendly when they get built.
              </p>

              <p className="font-semibold text-base pb-[2px] pt-7">
                Product Design and Branding
              </p>
              <p className="manrope font-medium text-base leading-6 w-[300px] lg:w-[528px]">
                Detailed insights into company performances creating mobile apps
                lorem ipsum dolor and we build mobile apps and custom websites
                that are SEO-friendly when they get built.
              </p>

              <div className="mb-8 lg:mb-0 w-fit flex items-center rounded-[50px] px-6 py-4 border border-biyar_purple bg-biyar_purple mt-7">
                <p className="font-normal text-lg mr-[10px]  text-white">
                  Get Started
                </p>
                <img src={whiteArrow} alt="whiteArrow" />
              </div>
            </div>

            <div className="">
              <img src={aboutUs} />
            </div>
          </div>
        </section>

        <FifthSection />
        <FourthSection />
      </div>
    </Layout>
  );
};

export { AboutUs };
