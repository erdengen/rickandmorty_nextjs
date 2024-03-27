import React from "react";
import { CategoriesComponent } from "@/components/categories";
import { FeaturedMovie } from "@/components/featured-movie";
import { MoviesSection } from "@/components/movies-section";

function HomeContainer({
  popularMovies,
  topRatedMovies,
  categories,
  selectedCategory,
}) {
  return (
    <>
      <FeaturedMovie
        movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
      />
      <CategoriesComponent categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
      <MoviesSection
        title="Your favorites"
        movies={topRatedMovies.slice(1, 7)}
      />
    </>
  );
}

export { HomeContainer };
