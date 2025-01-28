import { BoldText } from "../atoms/BoldText";
import { SubText } from "../atoms/SubText";
import { ExploreProjects } from "./buttons/ExploreProjects";
import { GetStarted } from "./buttons/GetStarted";
import plusImage from "../assets/images/plusImage.svg";
import sampleImageOne from "../assets/images/sampleImageOne.png";
import { Testimonial } from "./cards/Testimonial";
import sampleImageTwo from "../assets/images/sampleImageTwo.png";

const FourthSection = () => {
  return (
    <>
      <div className="mx-auto lg:w-[1117px] mt-14 lg:mt-28 mb-16 lg:mb-32">
        <div className="bg-white lg:flex items-center ">
          <BoldText text="Words on the street" className="lg:w-[571px]" />

          <section>
            <SubText
              text="Detailed insights into company performances creating mobile apps lorem ipsum dolor and we build mobile apps and custom websites that are"
              className="pb-8 px-4 lg:px-0"
            />

            <div className="flex flex-col lg:flex-row items-center gap-6">
              <GetStarted />
              <ExploreProjects />
            </div>
          </section>
        </div>
        <img src={plusImage} className="mt-6" />
      </div>

      <div className="flex mb-40 lg:mb-80">
        <div className="relative overflow-hidden w-full h-[399px] bg-gray-100">
          <div className="flex animate-marquee">
            <Testimonial
              img={sampleImageOne}
              text="“Now that we’ve used Owner for 1 year, I can say confidently that
              it is the best technology in our restaurant.”"
              author="Phillip Hang"
              role="Owner of Sushi Me Roll'n"
              ifGray
            />
            <Testimonial
              img={sampleImageTwo}
              text="“Now that we’ve used Owner for 1 year, I can say confidently that
              it is the best technology in our restaurant.”"
              author="Phillip Hang"
              role="Owner of Sushi Me Roll'n"
              ifGray={false}
            />

            <Testimonial
              img={sampleImageOne}
              text="“Now that we’ve used Owner for 1 year, I can say confidently that it is the best technology in our restaurant.”"
              author="Phillip Hang"
              role="Owner of Sushi Me Roll'n"
              ifGray
            />
            <Testimonial
              img={sampleImageTwo}
              text="“Now that we’ve used Owner for 1 year, I can say confidently that it is the best technology in our restaurant.”"
              author="Phillip Hang"
              role="Owner of Sushi Me Roll'n"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { FourthSection };
