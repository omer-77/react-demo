import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./Grid.module.css";

function Grid() {
  const [loadedCharacters, setCharactersArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setCharactersArray(data.results);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.apply(null, { length: 10 }).map((value, index) => {
          return <Skeleton key={index} />;
        })}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {loadedCharacters.map((character) => {
        return <Card data={character} key={character.id}></Card>;
      })}
    </div>
  );
}

export default Grid;
