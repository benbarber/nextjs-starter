/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
