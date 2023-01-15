import { pick } from "contentlayer/client";
import { allArticles } from "contentlayer/generated";

import BlogPostCard from "@/components/BlogPostCard";

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
    );
  return { props: { articles } };
}

export default function Blog({ articles }: { articles: typeof allArticles }) {
  return (
    <Container title="Blog">
      <div>Blog</div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate et
        veniam unde repellat dolores consequatur saepe, autem in voluptas ab,
        repudiandae laborum, hic quo? Accusantium modi minima aspernatur earum
        ea.
      </p>

      <div className="flex flex-col gap-y-8 mt-10">
        {articles.map((article) => (
          <BlogPostCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
