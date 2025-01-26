import { useState } from "react";
import { projects } from "../data";
import sampleImage from "../assets/images/sampleImage.svg";
import { BoldText } from "../atoms/BoldText";
import { SubText } from "../atoms/SubText";

const ThirdSection = () => {
  const [activeTab, setActiveTab] = useState("Cure Click");
  return (
    <div className="bg-gray_200 pb-32">
      <section className="pt-28 pb-16 w-[571px] mx-auto">
        <BoldText text="Selected Product Showcase" className="text-center" />
      </section>

      <div className="flex mx-auto w-[1116px]">
        <section className="bg-white rounded-[30px] mr-6 p-8">
          <SubText
            text=" A visual presentation of our selected products we have worked on"
            className="w-[258px] pb-8"
          />

          {projects?.map(({ id, name }) => {
            return (
              <div
                className="cursor-pointer"
                key={id}
                onClick={() => setActiveTab(name)}
              >
                <p
                  className={`font-semibold text-2xl border mb-5 rounded-2xl px-5 py-[15px] ${
                    activeTab === name
                      ? "text-white border-biyar_purple bg-biyar_purple"
                      : "text-gray_500 border-gray_100"
                  }`}
                >
                  {name}
                </p>
              </div>
            );
          })}
        </section>

        <section className="bg-white px-5 py-[30px]">
          <img src={sampleImage} alt="sampleImage" />
          <p className="manrope text-base font-medium pt-5 leading-6">
            A visual presentation of our selected products we have worked on
          </p>
        </section>
      </div>
    </div>
  );
};

export { ThirdSection };
