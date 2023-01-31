import { relativeDate } from "lib/utils";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

type BlogPostCardProps = {
  article: {
    title: string;
    slug: string;
    publishedAt: string;
    summary: string;
    readingTime: {
      text: string;
    };
    wordCount: number;
  };
};

const BlogPostCard = ({ article }: BlogPostCardProps) => {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="bg-transparent md:hover:bg-foreground/5 transition duration-300 p-4 -mx-4 rounded-lg"
    >
      <article className="flex flex-col gap-y-1">
        <h2 className="text-lg font-semibold leading-tight md:leading-none text-blue-500">
          {article.title}
        </h2>
        <p className=" ">{article.summary}</p>
        <div className="flex gap-x-4 text-grey-7 transition mt-2">
          <div className="text-sm flex items-center justify-start gap-2 leading-none">
            <Calendar size={15} />
            <span>{relativeDate(article.publishedAt)}</span>
          </div>
          <div className="text-sm flex items-center justify-start gap-2 leading-none">
            <Clock size={15} />
            <span>{article.readingTime.text}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
