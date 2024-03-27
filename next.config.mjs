/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'placehold.it',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/**',
          },
        ],
      }
};

export default nextConfig;
