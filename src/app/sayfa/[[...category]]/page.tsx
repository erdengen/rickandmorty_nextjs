import React from "react";
import { HomeContainer } from "@/containers/home/HomeContainer";

/*async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}*/
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchGenres,
  fetchMoviesByGenre,
} from "@/services/movie";
import Link from "next/link";

async function CategoryPage({ params }) {
  const pagePromises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];
  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]));
  }

  if (!!params.category?.length) {
    pagePromises.push(fetchMoviesByGenre(params.category[0]));
  }

  const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
    await Promise.all(pagePromises);

  return (
    <div>
      <HomeContainer
        categories={genres}
        popularMovies={popularMovies}
        topRatedMovies={topRatedMovies}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategoryMovies ?? [],
        }}
      />
    </div>
  );
}

export default CategoryPage;
