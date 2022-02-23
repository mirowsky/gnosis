require("dotenv").config({ path: `./.env` });
const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === true,
});

// function getEnvironmentGTM() {
//   return `${process.env[`GTM_${process.env.GTM_ENV.toUpperCase()}`]}`;
// }

/** @type {import('next').NextConfig} */
module.exports = withAnalyzer({
  reactStrictMode: true,
  // env: {
  //   GTM: getEnvironmentGTM(),
  // },
  swcMinify: true,
});
