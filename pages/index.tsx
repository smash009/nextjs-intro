import Link from "next/link";
import Seo from "../components/Seo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home({ results }: any) {
  const router = useRouter();
  const onClick = (id: any, title: any) => {
    router.push(
      {
        pathname: `/movies/%{id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
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
              <h4>
                <Link
                  href={{
                    pathname: `/movies/${movie.id}`,
                    query: {
                      title: movie.original_title,
                    },
                  }}
                  as={`/movies/${movie.title}`}
                >
                  {movie.original_title}
                </Link>
              </h4>
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

         {
          /* .movie_poster {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover .movie_poster {
          transform: scale(1.05) translateY(-10px);
        } */
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
  const response = await fetch(`http://localhost:3003/api/movies`);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
