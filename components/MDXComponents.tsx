import Image from "next/image";
import Link from "next/link";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
};

export default MDXComponents;
