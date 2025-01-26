import { SubText } from "../atoms/SubText";
import purpleArrow from "../assets/icons/purple_arrow_circle_right.svg";
import checkBox from "../assets/icons/check_box.svg";
import biyarTech from "../assets/images/biyarTech.svg";
// import grid from "../assets/images/grid.svg";
import { servicesOne, servicesTwo } from "../data";

const FifthSection = () => {
  return (
    <div className="bg-purple_100">
      {/* <img
        src={grid}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      /> */}

      <div className="flex items-center justify-center">
        <img src={biyarTech} />
      </div>

      <div className="pt-52 pb-96 flex items-center justify-center">
        <section className="">
          <p className="manrope font-bold text-[32px] text-white leading-10 w-[544px] pb-3">
            Everything you need to run your business, right out of the box.
          </p>

          <SubText
            className="text-white w-[423px] pb-6"
            text="Detailed insights into company performances creating mobile apps lorem ipsum dolor and we build mobile apps and custom websites that are"
          />

          <div className="flex justify-center whitespace-nowrap mb-24 w-fit rounded-[50px] px-6 py-4 border border-white bg-white">
            <p className="font-normal text-lg mr-[10px] text-biyar_purple">
              Lets Talk
            </p>
            <img src={purpleArrow} alt="whiteArrow" />
          </div>
        </section>

        <div className="mr-6">
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
