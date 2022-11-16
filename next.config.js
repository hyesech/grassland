/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextEnv = require('next-env');

const env = nextEnv();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('-------------DEVELOPMENT MODE-------------');
  } else {
    console.log('-------------PRODUCTION MODE-------------');
  }
  return env([defaultConfig, nextConfig]);
};
