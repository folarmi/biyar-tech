import { JoinOurTeamSectionHeader } from "../atoms/JoinOurTeamSectionHeader";
import { JoinOurTeamSubText } from "../atoms/JoinOurTeamSubText";
import { RoundedButton } from "../components/buttons/RoundedButton";
import { BlogCard } from "../components/cards/BlogCard";
import { Layout } from "../components/Layout";
import { SearchInput } from "../components/SearchInput";

const Blog = () => {
  const blogCards = new Array(9).fill(null);
  return (
    <Layout>
      <div className="">
        <section className="pt-36 flex flex-col items-center bg-gray_200">
          <JoinOurTeamSectionHeader text="The latest news from Biyar" />
          <JoinOurTeamSubText
            text="We are building something bigger than ourselves for the world, this is where we talk about why’s, how’s and talk about our discoveries"
            className="w-[620px] text-center pt-[10px] pb-7"
          />

          <div className="flex items-center mb-10 gap-x-3">
            <RoundedButton text="Products" />
            <RoundedButton text="Design" />
            <RoundedButton text="Engineering" />
            <RoundedButton text="Technology" />
            <RoundedButton text="Inside Biyar" />
          </div>

          <div className="mb-16">
            <SearchInput />
          </div>
        </section>

        <section className="py-[103px]">
          <div className="flex flex-wrap justify-center">
            {blogCards.map((_, index) => (
              <BlogCard
                href={`/blog/4`}
                date="12 Aug 2024"
                title="Blog Title"
                key={index}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export { Blog };
