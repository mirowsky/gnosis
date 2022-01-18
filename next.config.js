require("dotenv").config({ path: `./.env` });

function getEnvironmentGTM() {
  return `${process.env[`GTM_${process.env.GTM_ENV.toUpperCase()}`]}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    getEnvironmentGTM()
  },
  swcMinify: true,
};

module.exports = nextConfig;
