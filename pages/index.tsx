import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const json = await response.json();

      console.log(json);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1>Hello</h1>
    </div>
  );
}
