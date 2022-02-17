/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, `@import '~@styles/variable.scss';`)],
  },
}
