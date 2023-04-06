import '~/styles/tailwind.css'

export const metadata = {
  title: 'NextJs Starter',
  description:
    'A Next.js 13+ (App dir) project configured with TypeScript, ESLint, Prettier, and Husky.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-500 antialiased">{children}</body>
    </html>
  )
}
