/** @type {import('next').NextConfig} */

const siteTitle = 'qbreis — enric gatell';
const siteDescription = 'This blog contains the step-by-step annotations of what I learn and consolidate, day by day, in terms of programming and web design, among other things.';

let deployPath = 'http://localhost:3000';
if (process.env.NETLIFY === 'true') {
    deployPath = process.env.URL;
    if (
        process.env.CONTEXT === 'deploy-preview' ||
        process.env.CONTEXT === 'staging'
    ) {
        deployPath = process.env.DEPLOY_PRIME_URL;
    }
}

const nextConfig = {
    reactStrictMode: true,
    deployPath: deployPath,
    siteTitle: siteTitle,
    siteDescription: siteDescription,
}

module.exports = nextConfig
