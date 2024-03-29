import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Inter } from "next/font/google";

import Footer from "./Footer";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

const Container = (props: any) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [loading, setLoading] = useState(true);

  const { children, ...customMeta } = props;

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading, router.asPath]);

  const defaultTitle = "Sean Kerwin - Web Developer & Software Engineer";

  const meta = {
    description:
      "A skilled full-stack developer and software enginner based in Wiltshire, England",
    image: "https://seankerwin.dev/banner.jpg",
    type: "website",
    ...customMeta,
    title: customMeta.title
      ? `${customMeta.title} | ${defaultTitle}`
      : defaultTitle,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://seankerwin.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sean Kerwin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@snwkrwn" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={`https://seankerwin.dev${router.asPath}`} />
      </Head>
      <div className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="container">
            <main className="flex flex-col mt-6" id="content">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Container;
