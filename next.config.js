/** @type {import('next').NextConfig} */
const API_KEY = process.env.REACT_APP_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org"], // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 됨
  },
};

module.exports = nextConfig;
