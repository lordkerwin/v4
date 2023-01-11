import type { Article } from "contentlayer/generated";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
dayjs.extend(relativeTime);

const BlogPostCard = ({ article }: { article: Article }) => {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="bg-transparent md:hover:bg-foreground/5 transition duration-300 p-4 -mx-4 rounded-lg"
    >
      <div className="flex flex-col gap-y-1">
        <h3 className="text-lg font-semibold leading-tight md:leading-none">
          {article.title}
        </h3>
        <p className="truncate opacity-95">{article.body.raw}</p>
        <div className="flex gap-x-4">
          <div className="text-xs text-gray-500 flex items-center justify-start gap-1 leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <span>{dayjs().to(article.publishedAt)}</span>
          </div>
          <div className="text-xs text-gray-500 flex items-center justify-start gap-1 leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{article.readingTime.text}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
