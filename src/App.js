import React, { Component } from "react";
import "./App.css";
import KanjiList from "./components/kanji_list/kanji.component";
import Pagination from "./components/pagination/pagination";

import { SearchBox } from "./components/search-box/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kanjis: [
        {
          character: "美しい",
          meaning: "beautiful",
          id: 1,
        },
        {
          character: "新しい",
          meaning: "new",
          id: 2,
        },
        {
          character: "古い",
          meaning: "tall",
          id: 3,
        },
        {
          character: "上手",
          meaning: "Good at",
          id: 4,
        },
        {
          character: "下手",
          eaning: "bad at",
          id: 5,
        },
        {
          character: "美しい",
          meaning: "beautiful",
          id: 6,
        },
        {
          character: "新しい",
          meaning: "new",
          id: 7,
        },
        {
          character: "古い",
          meaning: "tall",
          id: 8,
        },
        {
          character: "上手",
          meaning: "Good at",
          id: 9,
        },
        {
          character: "下手",
          eaning: "bad at",
          id: 10,
        },
        {
          character: "美しい",
          meaning: "beautiful",
          id: 11,
        },
        {
          character: "新しい",
          meaning: "new",
          id: 12,
        },
        {
          character: "古い",
          meaning: "tall",
          id: 13,
        },
        {
          character: "上手",
          meaning: "Good at",
          id: 14,
        },
        {
          character: "下手",
          meaning: "bad at",
          id: 15,
        },
      ],
      searchField: "",
      kanjisPerPage: 5,
      currentPage: 1,
    };
  }
  // componentDidMount() {
  //   fetch("https://jisho.org/api/v1/search/words?keyword=house")
  //     .then((response) => response.json())
  //     .then((keyword) => this.setState({ kanjis:  }));
  // }
  render() {
    // const changeText = function (e) {
    //   this.setState({ searchField: e.target.value });
    // };
    const { kanjis, searchField, kanjisPerPage, currentPage } = this.state;

    //getKanjisPerPage
    // const start = (currentPage - 1) * kanjisPerPage;
    const end = currentPage * kanjisPerPage;
    const start = end - kanjisPerPage;
    const getKanjisPerPage = kanjis.slice(start, end);

    //Change page
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    const filterKanjis = getKanjisPerPage.filter((kanji) =>
      kanji.character.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Learn Kanji</h1>
        <SearchBox
          placeholder="search kanji"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <KanjiList kanjis={filterKanjis} />
        <Pagination
          kanjisPerPage={kanjisPerPage}
          totalKanjis={kanjis.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default App;
