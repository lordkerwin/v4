import Image from "next/image";

import Container from "../components/Container";

export default function About() {
  return (
    <Container title="About">
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 justify-between items-start">
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold">Hey 👋</h1>
            <p className="text-lg md:text-xl">
              My name is Sean Kerwin and I&apos;m a self-taught front-end web
              developer and designer based in Wiltshire, England.
            </p>
          </div>
          <Image
            src="/me.webp"
            alt="Sean Kerwin"
            width={120}
            height={120}
            className="order-1 w-24 md:w-auto md:order-2 rounded-full ring-2 ring-pink-900 ring-offset-4 ring-offset-background mr-1"
          />
        </div>
        <hr className="w-20 border-pink-900" />
        <section className="prose">
          <p>
            I&apos;ve been a full-stack web developer for quite some time now. I
            have a passion for front-end development to create the best possible
            user experience. I&apos;ve been writing code since the days of
            MySpace (yes, it&apos;s true) and I am constantly learning new
            technologies and best practices to improve my skills.
          </p>

          <div>
            I have used a plethora of frameworks and languages over the years,
            but here are some of the technologies I&apos;ve been working with
            recently:
            <ul className="marker:text-pink-900">
              <li>TypeScript</li>
              <li>React + Next</li>
              <li>Vue + Nuxt</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <hr className="w-20 border-pink-900" />
          <p>
            When I&apos;m not coding away on the latest web project, I love to
            spend time with my family. I have a wife and three beautiful
            daughters who keep me on my toes, and I wouldn&apos;t have it any
            other way. I am also a dog lover and have a furry companion who I
            enjoy spending time with.
          </p>
          <p>
            I believe in maintaining a good work-life balance, and make sure to
            make time for the things that matter most in life, which for me, is
            my family.
          </p>
        </section>
      </div>
    </Container>
  );
}
