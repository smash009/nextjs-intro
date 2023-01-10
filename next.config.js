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
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
