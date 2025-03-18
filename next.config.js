// @ts-check

module.exports = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://mamindlasathwika.com/:path*',
        permanent: true,
      },
    ];
  },
};
