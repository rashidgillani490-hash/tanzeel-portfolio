import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
    >
      {/* metadata */}
      <Head>
        <title>Tanzeel ur Rehman | Co-founder of NexCore | Agentic AI Expert</title>
        <meta
          name="description"
          content="Tanzeel ur Rehman, Co-founder of NexCore, builds intelligent AI automation systems, modern websites, and scalable software architectures for an international client base."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, javascript, portfolio, framer-motion, agentic AI, AI automation, autonomous workflows, NexCore, full-stack, software architecture"
        />
        <meta name="author" content="Tanzeel ur Rehman" />
        <meta name="theme-color" content="#a78bfa" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      <div className="pt-20 xl:pt-28 pb-16 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;