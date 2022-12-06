import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJs Starter</title>
        <meta
          name="description"
          content="A Next.js project configured with TypeScript, ESLint, Prettier, and Husky."
        />
      </Head>

      <main className="flex flex-col items-center justify-center text-center min-h-screen">
        <Link href="https://github.com/benbarber/nextjs-starter">
          <h1 className="text-3xl text-black font-bold leading-relaxed">
            NextJs Starter
          </h1>
        </Link>

        <p>
          A Next.js project configured with TypeScript, ESLint, Prettier, and
          Husky.
        </p>
      </main>
    </div>
  );
};

export default Home;
