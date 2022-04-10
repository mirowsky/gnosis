require("dotenv").config({ path: `./.env` });

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
module.exports = {
  reactStrictMode: false,
  env: {
    GTM: getGTMEnvironment(),
    NEXT_PUBLIC_API_MOCKING: "enabled",
  },
  swcMinify: true,
};
