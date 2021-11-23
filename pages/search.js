import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Search({ movies, query }) {
  return (
    <Layout q={query}>
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
  const query = context.query.q;
  const call = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`;
  const response = await fetch(call);
  const movies = await response.json();
  return {
    props: { movies, query }, // will be passed to the page component as props
  };
}
