import { allArticles } from "contentlayer/generated";

import BlogPostCard from "@/components/BlogPostCard";

import Container from "../components/Container";

export async function getStaticProps() {
  // get the latest 3 articles
  const articles = allArticles
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);
  console.log(articles);
  return { props: { articles } };
}

const Home = ({ articles }: { articles: typeof allArticles }) => {
  return (
    <Container>
      <div>Home</div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sequi
        voluptatum nostrum tenetur quasi est nulla quae unde aspernatur cumque
        eum, voluptas a iusto eaque error! Sed eaque repellat omnis.
      </p>
      <div className="flex flex-col gap-y-8 mt-10">
        {articles.map((article) => (
          <BlogPostCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
