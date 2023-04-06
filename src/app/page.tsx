import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center text-center min-h-screen">
        <Link href="https://github.com/benbarber/nextjs-starter">
          <h1 className="text-3xl text-black font-bold leading-relaxed">
            NextJs Starter
          </h1>
        </Link>

        <p>
          A Next.js 13+ (App dir) project configured with TypeScript, ESLint, Prettier,
          and Husky pre-commit hooks.
        </p>
      </main>
    </div>
  )
}

export default Home
