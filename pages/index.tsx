import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Starter</title>
        <meta
          name="description"
          content="A Next.js project configured with TypeScript, ESLint, Prettier, and Husky."
        />
      </Head>

      <main className={styles.main}>
        <Link href="https://github.com/benbarber/nextjs-starter">
          <h1 className={styles.title}>NextJs Starter</h1>
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
