import React from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button";

import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Treding Movies</h2>
            <Link to="/movie">
              <OutlineButton classname="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated Movie</h2>
          <Link to="/movie">
            <OutlineButton classname="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending TV</h2>
          <Link to="/tv">
            <OutlineButton classname="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.popular} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated TV</h2>
          <Link to="/tv">
            <OutlineButton classname="small">View more</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>
    </>
  );
};

export default Home;
