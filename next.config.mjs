/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd1oekhgtmtm2tg3e.public.blob.vercel-storage.com',
            pathname: '/**',
          },
        ],
    }
};

export default nextConfig;
