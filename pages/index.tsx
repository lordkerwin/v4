import { pick } from "contentlayer/client";
import { allArticles } from "contentlayer/generated";

import BlogPostCard from "@/components/BlogPostCard";
import WelcomeCard from "@/components/WelcomCard";

import Container from "../components/Container";

export async function getStaticProps() {
  const articles = allArticles
    .map((article) =>
      pick(article, [
        "title",
        "slug",
        "publishedAt",
        "summary",
        "readingTime",
        "wordCount",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);
  return { props: { articles } };
}

const Home = ({ articles }: { articles: typeof allArticles }) => {
  return (
    <Container>
      <div className="flex flex-col gap-16">
        <WelcomeCard />
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Latest Articles</h3>
          <div className="flex flex-col gap-y-8">
            {articles.map((article) => (
              <BlogPostCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
