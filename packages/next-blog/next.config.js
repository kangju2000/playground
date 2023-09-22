import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { withContentlayer } from 'next-contentlayer'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
}

export default withContentlayer(withVanillaExtract(nextConfig))
