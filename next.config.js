require("dotenv").config({ path: `./.env` });
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// function getEnvironmentGTM() {
//   return `${process.env[`GTM_${process.env.GTM_ENV.toUpperCase()}`]}`;
// }

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  // env: {
  //   GTM: getEnvironmentGTM(),
  // },
  swcMinify: true,
});
