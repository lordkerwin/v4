import components from "components/MDXComponents";
import type { Article } from "contentlayer/generated";
import { allArticles } from "contentlayer/generated";
import { relativeDate } from "lib/utils";
import { Calendar, Clock } from "lucide-react";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import Container from "@/components/Container";

const ArticlePage = ({ article }: { article: Article }) => {
  const Component = useMDXComponent(article.body.code);
  return (
    <Container
      title={article.title}
      description={article.summary}
      date={new Date(article.publishedAt).toISOString()}
      type="article"
    >
      <article className="prose max-w-none break-words">
        <h1>{article.title}</h1>

        <div className="border-t border-b border-foreground/20 py-3 mb-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{relativeDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="">{article.readingTime.text}</span>
            </div>
          </div>
        </div>

        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </article>
    </Container>
  );
};

export default ArticlePage;

export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  article: Article | undefined;
}> = async (context) => {
  const article = allArticles.find(
    (article) => article.slug === context.params?.slug
  );

  return {
    props: {
      article,
    },
  };
};
