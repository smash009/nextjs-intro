import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/movies`);
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
