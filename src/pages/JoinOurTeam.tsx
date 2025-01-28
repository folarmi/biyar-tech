import { BoldText } from "../atoms/BoldText";
import { JoinOurTeamHeader } from "../atoms/JoinOurTeamHeader";
import { JoinOurTeamSubText } from "../atoms/JoinOurTeamSubText";
import { SubText } from "../atoms/SubText";
import { RoundedButton } from "../components/buttons/RoundedButton";
import { Layout } from "../components/Layout";
import workFromHome from "../assets/icons/home_work.svg";
import laptop from "../assets/icons/laptop.svg";
import diversity from "../assets/icons/diversity_1.svg";
import wifi from "../assets/icons/wifi.svg";
import flight from "../assets/icons/flight.svg";
import growth from "../assets/icons/home_work.svg";
import { sampleJobs } from "../data";
import { JoinOurTeamSectionHeader } from "../atoms/JoinOurTeamSectionHeader";
import { JobCard } from "../components/cards/JobCard";
import { ScrollingGallery } from "../components/ScrollingGallery";
import galleryOne from "../assets/images/galleryOne.svg";
import galleryTwo from "../assets/images/galleryTwo.png";
import galleryThree from "../assets/images/galleryThree.svg";
import galleryFour from "../assets/images/galleryFour.svg";
import galleryFive from "../assets/images/galleryFive.svg";
import careerOne from "../assets/images/careerOne.svg";
import careerTwo from "../assets/images/careerTwo.jpg";
import careerThree from "../assets/images/careerThree.png";
import careerFour from "../assets/images/careerFour.svg";
import careerFive from "../assets/images/careerFive.svg";
import careerSix from "../assets/images/careerSix.svg";
import loveWorkOne from "../assets/images/loveWorkOne.png";
import loveWorkTwo from "../assets/images/loveWorkTwo.png";
import loveWorkThree from "../assets/images/loveWorkThree.png";
import loveWorkFour from "../assets/images/loveWorkFour.png";
import loveWorkFive from "../assets/images/loveWorkFive.png";

const JoinOurTeam = () => {
  const images = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
  ];

  const careerImages = [
    careerOne,
    careerTwo,
    careerThree,
    careerFour,
    careerFive,
    careerSix,
  ];

  const loveToWorkImages = [
    loveWorkOne,
    loveWorkTwo,
    loveWorkThree,
    loveWorkFour,
    loveWorkFive,
  ];

  const workAtBiyar = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
  ];

  return (
    <Layout>
      {/* First Section */}
      <section className="flex flex-col items-center justify-center bg-gray_200">
        <RoundedButton text="Careers" className="mt-8 lg:mt-14 mb-5" />

        <BoldText
          text="Help businesses create value from their ideas"
          className="w-[350px] lg:w-[710px] lg:text-center"
        />
        <SubText
          text="We are a Software development agency based in texas. We turn your ideas into value, we believe ideas shape the future"
          className="w-[300px] lg:w-[547px] lg:text-center pb-12"
        />

        <div className="mb-36 lg:mb-[169px] bg-gray_1000 w-[300px] lg:w-[930px] rounded-2xl">
          <section className="lg:flex items-center justify-between px-10 pt-8 pb-10">
            <div>
              <p className="font-bold text-[25.89px]">
                <span className="text-primary">12</span> Open Roles
              </p>
              <p className="font-medium text-gray_300 text-base manrope">
                Browse our job catalog
              </p>
            </div>

            <p className="manrope text-base font-semibold text-biyar_purple">
              View Open Roles &rarr;
            </p>
          </section>

          <div className="hidden md:block">
            <ScrollingGallery images={careerImages} />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col lg:flex-row mt-12 lg:mt-36 bg-white">
        <div className="w-full lg:w-1/2 flex flex-col mr-24">
          <div className="ml-0 lg:ml-24">
            <RoundedButton text="Our Work Culture" className="w-fit" />
            <JoinOurTeamSectionHeader
              text=" Driven by Purpose, Powered by Passion"
              className="w-[350px] lg:w-[432px] py-4 lg:py-0"
            />
          </div>
          <ScrollingGallery images={images} />
        </div>
        <div className="px-8 lg:px-0 w-full lg:w-1/2 mt-8 lg:mt-16">
          <JoinOurTeamHeader text="Obsess Over Solutions" />
          <JoinOurTeamSubText text="At Biyar, solving real problems is at the core of who we are. We put our customers first, knowing their success is our success. This customer-first mindset drives every decision we make and every solution we create." />
          <JoinOurTeamSubText
            text="We treat customer relationships as partnerships built to last. We align with our customers’ goals, go the extra mile, and deliver experiences that set a new standard for excellence."
            className="pb-7"
          />

          <JoinOurTeamHeader text="Radiate Positivity" />
          <JoinOurTeamSubText text="Our culture thrives on optimism and good energy. We believe that a positive mindset is contagious and essential for growth." />
          <JoinOurTeamSubText text="We celebrate the wins of our teammates’, and our customers’. Even when faced with challenges, we approach them with enthusiasm and a belief that there’s always a solution." />
          <JoinOurTeamSubText
            text="We’re building something bigger than ourselves, collective team energy helps brighten every interaction—whether it’s with teammates, customers, or partners."
            className="pb-7"
          />

          <JoinOurTeamHeader text="Move with Purpose" />
          <JoinOurTeamSubText text="Speed is our superpower. We’re not just fast; we’re purposeful in everything we do. Startups thrive on momentum, and we set bold timelines to make things happen quickly." />
          <JoinOurTeamSubText
            text="We work in a fast-paced environment where we measure time in hours and days, not weeks and months. We don’t wait for the perfect moment—we create it."
            className="pb-7"
          />

          <JoinOurTeamHeader text="Think Like an Owner" />
          <JoinOurTeamSubText text="Every team member is empowered to take ownership. This isn’t just a job—it’s an opportunity to leave your mark." />
          <JoinOurTeamSubText text="We trust you to make decisions, solve problems, and improve systems without waiting for permission. If you see something that can be better, it’s your chance to act." />
          <JoinOurTeamSubText
            text="When you join us, you’ll have the freedom, support, and responsibility to shape not just your role, but the future of our company."
            className="pb-7"
          />

          <JoinOurTeamHeader text="Commit to Growth" />
          <JoinOurTeamSubText text="Growth isn’t just a goal at Biyar —it’s a way of life. We value curiosity, learning, and the drive to constantly improve." />
          <JoinOurTeamSubText
            text="When you’re here, you’ll be encouraged to learn from the best—through books, courses, and insights from industry leaders. We believe that startups scale when their people scale, and we’ll provide you with the tools to grow alongside us."
            className="pb-7"
          />

          <JoinOurTeamHeader text="Make a Difference" />
          <JoinOurTeamSubText text="Joining Biyar means being part of something bigger than yourself. Our mission is to build software solutions that transform lives and businesses, leaving a lasting impact on the world." />
          <JoinOurTeamSubText
            text="With a culture rooted in urgency, empathy, and optimism, we’re creating a legacy of innovation. If you’re ready to bring your passion and purpose to a team that’s changing the game, we’d love to have you on board."
            className="pb-7"
          />
        </div>
      </section>

      {/* Third Section */}
      <div className="flex flex-col lg:flex-row pt-12 lg:pt-36">
        <div className="w-full lg:w-1/2 flex flex-col mr-24">
          <div className="ml-0 lg:ml-24">
            <RoundedButton text="Perks and Benefits" className="w-fit" />

            <JoinOurTeamSectionHeader
              text="Why you’ll love working here"
              className="w-[350px] lg:w-[432px] py-4 lg:py-0"
            />
            <ScrollingGallery images={loveToWorkImages} />
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap mt-12 lg:mt-0 px-8">
          <div className="">
            <JoinOurTeamHeader text="Work From Anywhere" img={workFromHome} />
            <JoinOurTeamSubText
              text="At Biyar, solving real problems is at the core of who we are. We put our customers first, knowing"
              className="w-[248px]"
            />
          </div>

          <div className="">
            <JoinOurTeamHeader text="Paid Time Off" img={flight} />
            <JoinOurTeamSubText
              text="Our culture thrives on optimism and good energy. We believe that a positive mindset is contagious and essential for growth."
              className="w-[248px]"
            />
          </div>

          <div className="">
            <JoinOurTeamHeader text="Team Retreats" img={diversity} />
            <JoinOurTeamSubText
              text="Speed is our superpower. We’re not just fast; we’re purposeful in everything we do. Startups thrive on momentum, and we set bold timelines to make things happen quickly."
              className="w-[248px]"
            />
          </div>

          <div className="">
            <JoinOurTeamHeader text="Macbook Pro" img={laptop} />
            <JoinOurTeamSubText
              text="Every team member is empowered to take ownership. This isn’t just a job—it’s an opportunity to leave your mark.
We trust you to make decisions."
              className="w-[248px]"
            />
          </div>

          <div className="">
            <JoinOurTeamHeader text="Growth Allowance" img={growth} />
            <JoinOurTeamSubText
              text="Growth isn’t just a goal at Biyar —it’s a way of life. We value curiosity, learning, and the drive to constantly improve."
              className="w-[248px]"
            />
          </div>

          <div className="">
            <JoinOurTeamHeader text="Internet Allowance" img={wifi} />
            <JoinOurTeamSubText
              text="Joining Biyar means being part of something bigger than yourself. Our mission is to build software solutions that transform lives and businesses, leaving a lasting impact on the world."
              className="w-[248px]"
            />
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <section className="mt-12 lg:mt-36 mb-12 lg:mb-24">
        <div className="w-1/2 flex flex-col mb-12">
          <div className="ml-0 lg:ml-24">
            <RoundedButton text="LIFE AT BIYAR" className="w-fit" />
            <JoinOurTeamSectionHeader
              text="  What it’s like working at Biyar"
              className="w-[350px] lg:w-[432px] py-4 lg:py-0"
            />
          </div>
        </div>
        <ScrollingGallery images={workAtBiyar} />
      </section>

      {/* Fifth Section */}
      <div className="bg-gray_900 pt-12 lg:pt-36">
        <section className=" flex flex-col  mx-auto lg:w-[1116px] px-8">
          <RoundedButton text="Job Openings" className="w-fit" />
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5 mb-12">
            <JoinOurTeamSectionHeader text="Career Openings at Biyar" />

            <p>All Openings</p>
          </div>

          {sampleJobs.map(({ dept, id, location, title }) => {
            return (
              <div key={id}>
                <JobCard
                  href={`/join-our-team/${id}`}
                  title={title}
                  dept={dept}
                  location={location}
                />
              </div>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export { JoinOurTeam };
