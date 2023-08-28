/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const CompressionPlugin = require('compression-webpack-plugin');

const nextConfig = withLess({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  async rewrites() {
    return [
      { source: '/api/:path*', destination: `https://testconsole.arkreen.com/api/:path*` },
    ]
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/btc-consumption': { page: '/btc-consumption' },
      '/btc-blocks': { page: '/btc-blocks' },
      '/arkreen-cells': { page: '/arkreen-cells' },
      '/greening': { page: '/greening' },
      '/btc-map': {page: '/btc-map'}
    }
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 生产环境下启用Gzip压缩
    if (!dev) {
      config.plugins.push(new CompressionPlugin());
    }
    config.resolve.fallback = { fs: false, net: false, tls: false };
    // 在这里进行字体加载的配置
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
})

module.exports = nextConfig
