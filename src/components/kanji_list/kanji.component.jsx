import React from "react";
import Kanji from "../kanji/kanji.component";

import "./kanji.styles.css";

export default function KanjiList(props) {
  return (
    <div className="kanji-list">
      {props.kanjis.map((kanji) => (
        <Kanji key={kanji.id} kanji={kanji} />
      ))}
    </div>
  );
}
