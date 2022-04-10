require("dotenv").config({ path: `./.env` });
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// package.json script sets the GTM_ENV to "dev" while on development or deployed development server, sets GTM_ENV to "prod" otherwise
const getGTMEnvironment = () => {
  return `${
    process.env[
      `GTM_${
        process.env.GTM_ENV?.toUpperCase() ?? "GTAG_NOT_FOUND_IN_PROCESS_ENV"
      }`
    ]
  }`;
};

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  env: {
    GTM: getGTMEnvironment(),
  },
  swcMinify: true,
});
