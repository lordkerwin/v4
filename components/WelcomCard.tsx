import Image from "next/image";

const WelcomeCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-20 md:items-center">
      <div className="order-2 md:order-1 flex flex-col gap-4 flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold">Sean Kerwin</h1>
        <p className="text-foreground/80 text-normal md:text-lg">
          I&apos;m a full-stack software engineer from England. I write about
          design, programming and other topics that interest me.
        </p>
      </div>
      <Image
        src="/me.webp"
        alt="Sean Kerwin"
        width={120}
        height={120}
        className="order-1 w-24 md:w-32 md:order-2 rounded-full ring-2 ring-blue-500 ring-offset-4 ring-offset-background mr-1"
      />
    </div>
  );
};

export default WelcomeCard;
