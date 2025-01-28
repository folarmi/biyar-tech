import { Layout } from "../components/Layout";
import backArrow from "../assets/icons/arrow_back.svg";
import blogImage from "../assets/images/blogImage.svg";
import { JoinOurTeamSectionHeader } from "../atoms/JoinOurTeamSectionHeader";
import { Link } from "react-router";

const SingleBlog = () => {
  return (
    <Layout>
      <section className="bg-gray_200 px-8 lg:px-40 pt-12 lg:pt-36">
        <Link
          to="/blog"
          className={`w-fit flex items-center rounded-[50px] px-4 py-2 border border-gray_300 bg-white mb-7`}
        >
          <img src={backArrow} alt="backArrow" />
          <p className="font-normal text-lg mr-[10px] text-gray_300 ">
            Back to Blog Home
          </p>
        </Link>

        <div className="flex flex-col lg:flex-row justify-between pb-8">
          <section className="order-2 lg:order-1">
            <JoinOurTeamSectionHeader text="Why we built Cureclick for africans" />
            <p className="manrope font-medium text-base leading-6 w-[350px] lg:w-[620px] pt-[10px]">
              We are building something bigger than ourselves for the world,
              this is where we talk about why’s, how’s and talk about our
              discoveries
            </p>

            <div className="my-5">
              <img src={blogImage} />
            </div>

            <p className="manrope font-medium text-base leading-[26px] w-[300px] lg:w-[734px] pt-[10px] justify-start">
              We are building something bigger than ourselves for the world,
              this is where we talk about why’s, how’s and talk about our
              discoveries We are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveriesWe are building something bigger than ourselves for
              the world, this is where we talk about why’s, how’s and talk about
              our discoveries
            </p>
          </section>

          <section className="order-1 lg:order-2">
            <div className="bg-white py-5 px-8 rounded-md mb-4">
              <div className="flex items-center mb-3">
                <div className="bg-purple_100 h-[30px] w-[30px] rounded-full"></div>
                <p className="text-base manrope font-semibold pl-2">
                  Micheal Sampson
                </p>
              </div>

              <p className="manrope text-sm font-medium">12 February 2024</p>
            </div>
            <div className="bg-white py-5 px-8 mb-3 rounded-md">
              <div className="flex items-center mb-3">
                {/* <Rounded /> */}
                <p className="manrope text-base font-semibold">
                  Table of Contents
                </p>
              </div>

              <ul className="list-disc marker:text-gray_700 text-gray_700 ml-8">
                <li>Item 1</li>
                <li>Item 2 </li>
                <li>Item 3 </li>
              </ul>
            </div>
          </section>
        </div>

        <section>
          <p className="text-base manrope font-semibold">More Reads</p>
        </section>
      </section>
    </Layout>
  );
};

export { SingleBlog };
