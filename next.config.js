/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    })

    return config
  },
  // images: {
  //   domains: [
  //     "robohash.org",
  //   ],
  // },
}

module.exports = nextConfig
