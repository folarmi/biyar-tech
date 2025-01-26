import { FifthSection } from "../components/FifthSection";
import { FourthSection } from "../components/FourthSection";
import { HeroSection } from "../components/HeroSection";
import { Layout } from "../components/Layout";
import { SecondSection } from "../components/SecondSection";
// import { Sidebar } from "../components/Sidebar";
import { ThirdSection } from "../components/ThirdSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />

      <SecondSection />
      <ThirdSection />
      <FourthSection ifImage />
      <FifthSection />
      {/* <Sidebar /> */}
    </Layout>
  );
};

export { Home };
