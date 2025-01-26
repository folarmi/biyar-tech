import { Route, Routes } from "react-router";
import { AboutUs, Blog, Home, JoinOurTeam, SingleJob } from "../pages";
import { SingleBlog } from "../pages/SingleBlog";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join-our-team" element={<JoinOurTeam />} />
      <Route path="/join-our-team/:id" element={<SingleJob />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
    </Routes>
  );
};

export { RoutePage };
