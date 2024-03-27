import React from "react";
import Link from "next/link";
import Image from "next/image";


import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className={`relative bg-red-500 min-h-96`}>
      
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          width={500}
          height={100}
          className="object-cover w-full"
        />
      </div>
      <div className="absolute top-0 left-0">
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          
        </button>
      </div>
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };
