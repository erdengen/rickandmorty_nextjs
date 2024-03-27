import CategoriesLoading from "@/components/categories/loading";
import { FeatureMovieLoading } from "@/components/featured-movie";
import { MoviesSectionLoading } from "@/components/movies-section";
import React from "react";

function Loading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default Loading;
