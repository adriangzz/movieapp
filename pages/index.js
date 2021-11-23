import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <Layout>
      <div className="movieContainer">
        {movies.results.map((movie, idx) => {
          return (
            <Link key={idx} href={`/movie/${movie.id}`}>
              <a className="movie">
                <div key={idx}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const call = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`;
  const response = await fetch(call);
  const movies = await response.json();
  return {
    props: { movies }, // will be passed to the page component as props
  };
}
