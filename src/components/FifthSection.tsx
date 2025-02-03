import { SubText } from "../atoms/SubText";
import purpleArrow from "../assets/icons/purple_arrow_circle_right.svg";
import checkBox from "../assets/icons/check_box.svg";
import { servicesOne, servicesTwo } from "../data";
import { RollingImages } from "./RollingImages";

const FifthSection = () => {
  return (
    <div className="relative bg-custom-pattern bg-cover bg-center">
      <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <RollingImages />
      </div>

      <div className="px-8 lg:px-0 pt-48 lg:pt-96 pb-24 lg:pb-96 flex flex-col lg:flex-row lg:items-center justify-center">
        <section className="">
          <p className="manrope font-bold text-[32px] text-white leading-10 lg:w-[544px] pb-3">
            Everything you need to run your business, right out of the box.
          </p>

          <SubText
            className="text-white lg:w-[423px] pb-6"
            text="Detailed insights into company performances creating mobile apps lorem ipsum dolor and we build mobile apps and custom websites that are"
          />

          <div className="flex justify-center whitespace-nowrap mb-12 lg:mb-24 w-fit rounded-[50px] px-6 py-4 border border-white bg-white">
            <p className="font-normal text-lg mr-[10px] text-biyar_purple">
              Lets Talk
            </p>
            <img src={purpleArrow} alt="whiteArrow" />
          </div>
        </section>

        <div className="lg:mr-6">
          {servicesOne.map(({ id, name }) => {
            return (
              <div className="flex items-center mb-6" key={id}>
                <img src={checkBox} className="mr-4" />
                <p className="text-white manrope text-sm">{name}</p>
              </div>
            );
          })}
        </div>

        <div className="">
          {servicesTwo.map(({ id, name }) => {
            return (
              <div className="flex items-center mb-6" key={id}>
                <img src={checkBox} className="mr-4" />
                <p className="text-white manrope text-sm">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { FifthSection };
