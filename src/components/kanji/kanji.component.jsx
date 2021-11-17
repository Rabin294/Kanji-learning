import React from "react";
import "./kanji.styles.css";

export default function Kanji(props) {
  return (
    <div className="kanji-container">
      <img
        src={`https://robohash.org/${props.kanji.id}?set=set4&size=180x180`}
        alt=""
      />
      <h1>{props.kanji.character}</h1>
      <h2>{props.kanji.meaning}</h2>
    </div>
  );
}
