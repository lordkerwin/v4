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
      <div className="flex flex-col gap-4">
        <h1 className="page-title">Blog</h1>
        <div className="text-foreground">
          <p>
            I write about web development, programming, and other things that I
            find interesting.
          </p>
          <p>
            You can also follow me on my{" "}
            <a
              href="https://twitter.com/snwkrwn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 mt-10">
        {articles.map((article) => (
          <BlogPostCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
