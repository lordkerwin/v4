import Image from "next/image";

const WelcomeCard = () => {
  return (
    <div className="flex gap-20 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold">Sean Kerwin</h1>
        <p className="text-foreground/80 text-lg">
          I&apos;m a full-stack software engineer from England. I write about
          design, programming and other topics that interest me.
        </p>
      </div>
      <Image
        src="/me.webp"
        alt="Sean Kerwin"
        width={120}
        height={120}
        className="rounded-full ring-2 ring-pink-900 ring-offset-4 ring-offset-background mr-1"
      />
    </div>
  );
};

export default WelcomeCard;
