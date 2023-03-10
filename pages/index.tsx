import Link from "next/link";
import Seo from "../components/Seo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ results }: any) {
  const router = useRouter();
  const onClick = (id: any, title: any) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <>
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie: any) => {
          return (
            <div
              key={movie.id}
              className="movie"
              onClick={() => onClick(movie.id, movie.original_title)}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.original_title}`}
                width={220}
                height={270}
                className="movie_poster"
              />
              <h4>{movie.original_title}</h4>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie {
          cursor: pointer;
        }

        .movie:hover {
          transform: scale(1.05) translateY(-10px);
        }

        .movie h4 {
          width: 200px;
          margin: 0 auto;
          padding: 5px;
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
