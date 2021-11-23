import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";

export default function Movie({ movie }) {
  console.log(movie);
  return (
    <Layout>
      <div className="movieIndividual">
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movieInfo">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.mid;
  const call = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`;
  const response = await fetch(call);
  const movie = await response.json();
  return {
    props: { movie }, // will be passed to the page component as props
  };
}