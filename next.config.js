/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/landing-page' : '/',
    output: 'export',
}

module.exports = nextConfig
