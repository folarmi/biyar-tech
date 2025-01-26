import { BoldText } from "../atoms/BoldText";
import { SubText } from "../atoms/SubText";
import { ExploreProjects } from "./buttons/ExploreProjects";
import { GetStarted } from "./buttons/GetStarted";
import plusImage from "../assets/images/plusImage.svg";
import biyarTechTwo from "../assets/images/biyarTechTwo.svg";
import sampleImageOne from "../assets/images/sampleImageOne.svg";
// import sampleImageTwo from "../assets/images/sampleImageTwo.svg";

type Prop = {
  ifImage?: boolean;
};

const FourthSection = ({ ifImage }: Prop) => {
  return (
    <>
      <div className="mx-auto w-[1117px] mt-28 mb-32">
        <div className="bg-white flex items-center ">
          <BoldText text="Words on the street" className="w-[571px]" />

          <section>
            <SubText
              text="Detailed insights into company performances creating mobile apps lorem ipsum dolor and we build mobile apps and custom websites that are"
              className="pb-8"
            />

            <div className="flex">
              <GetStarted />
              <ExploreProjects />
            </div>
          </section>
        </div>
        <img src={plusImage} className="mt-6" />
      </div>

      <div className="flex mb-24">
        <div className="flex bg-gray_900 rounded-r-3xl">
          <img src={sampleImageOne} />
          <div className=" px-8 flex flex-col py-6 ">
            <p className="manrope font-bold text-[32px] w-[493px] flex-grow">
              “Now that we’ve used Owner for 1 year, I can say confidently that
              it is the best technology in our restaurant.”
            </p>

            <section>
              <p className="text-base font-bold">
                Phillip Hang <br />{" "}
                <span className="font-medium">Owner of Sushi Me Roll'n</span>{" "}
              </p>
            </section>
          </div>
        </div>
      </div>
      {/* <div className="flex bg-gray_900 rounded-r-3xl">
          <img src={sampleImageTwo} />
          <div className=" px-8 flex flex-col py-6 ">
            <p className="manrope font-bold text-[32px] w-[493px] flex-grow">
              “Now that we’ve used Owner for 1 year, I can say confidently that
              it is the best technology in our restaurant.”
            </p>

            <section>
              <p className="text-base font-bold">
                Phillip Hang <br />{" "}
                <span className="font-medium">Owner of Sushi Me Roll'n</span>{" "}
              </p>
            </section>
          </div>
        </div> */}

      {ifImage && (
        <div className="flex items-center justify-center">
          <img src={biyarTechTwo} />
        </div>
      )}
    </>
  );
};

export { FourthSection };
