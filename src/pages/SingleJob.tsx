import { JoinOurTeamSectionHeader } from "../atoms/JoinOurTeamSectionHeader";
import { Rounded } from "../atoms/Rounded";
import { RoundedButton } from "../components/buttons/RoundedButton";
import { CustomInput } from "../components/CustomInput";
import { FileInput } from "../components/FileInput";
import { Layout } from "../components/Layout";

const SingleJob = () => {
  return (
    <Layout>
      <section className="bg-gray_200 pt-8">
        <div className="flex flex-col items-center">
          <RoundedButton text="Open Careers" className="mb-8" />

          <JoinOurTeamSectionHeader text="Senior Product Designer" />
          <p className="font-normal text-base text-gray_700 pt-3">
            Remote (Lagos, Nigeria)
          </p>
        </div>

        <section className="mt-[30px] w-[1116px] mx-auto pb-32 flex items-center">
          <section className="mr-6 ">
            <div className="bg-white p-5 mb-3 rounded-lg">
              <div className="flex items-center mb-3">
                <Rounded />
                <p className="manrope text-gray_700 font-semibold">
                  Job Description
                </p>
              </div>

              <p className="font-medium manrope text-base leading-6 text-gray_700 w-[620px]">
                Driven by Purpose, Powered by Passion, At Biyar Tech, we craft
                innovative software solutions that bring ideas to life.
                Specializing in product design, user experience, and
                cutting-edge development, we transform concepts into seamless
                digital experiences. Our team blends creativity, strategy, and
                technology to deliver impactful products tailored to your unique
                needs. Let’s build the future together.
              </p>
            </div>

            <div className="bg-white p-5 mb-3 rounded-lg">
              <div className="flex items-center mb-3">
                <Rounded />
                <p className="manrope text-gray_700 font-semibold">
                  Job Requirements
                </p>
              </div>

              <ul className="list-disc marker:text-gray_700 text-gray_700 ml-8">
                <li>Requirement 1</li>
                <li>Requirement 2 </li>
                <li>Requirement 3 </li>
                <li>Requirement 4</li>
                <li>Requirement 5</li>
              </ul>
            </div>

            <div className="bg-white p-5">
              <div className="flex items-center mb-3">
                <Rounded />
                <p className="manrope text-gray_700 font-semibold">Job Perks</p>
              </div>

              <ul className="list-disc marker:text-gray_700 text-gray_700 ml-8">
                <li>Perk 1</li>
                <li>Perk 2 </li>
                <li>Perk 3 </li>
                <li>Perk 4</li>
                <li>Perk 5</li>
              </ul>
            </div>
          </section>

          <section className="bg-white flex flex-col p-5 w-[432px]">
            <p className="manrope font-semibold text-base pb-5">
              Application Form
            </p>

            <CustomInput label="Full Name" placeholder="my own content" />
            <CustomInput label="Email" placeholder="my own content" />
            <CustomInput
              label="Portfolio/Website Link"
              placeholder="my own content"
            />
            <CustomInput
              label="Cover Letter"
              placeholder="Write your cover letter"
              textarea
            />
            <FileInput label="Upload CV" />

            <button className="bg-primary text-white rounded-lg py-3 text-base font-medium">
              Submit Application
            </button>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export { SingleJob };
