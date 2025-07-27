// import React, {useRef} from 'react'
import "./TitleCards.css";
// import Cards_data from '../../assets/Cards/Cards_data'
import { useEffect, useRef, useState } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const CardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGJmMDc3YjFmZjE4NTc3Yzg1ZGIwYjc2NjQyMjMxMiIsIm5iZiI6MTc0NDM2MzkxOC4yNDQsInN1YiI6IjY3ZjhlMThlMWJjNjM5NTY2YWQ5ZjJiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6FZe_Py9fHMpaSt_b0SK_jkV7S91JANsiKWpy-Lj22w",
    },
  };

  const handlewheel = (event) => {
    event.preventDefault();
    CardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    CardsRef.current.addEventListener("wheel", handlewheel);
  }, [category]);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={CardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="Card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.name}
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
