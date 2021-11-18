import React, { Component } from "react";
import "./App.css";
import KanjiList from "./components/kanji_list/kanji.component";
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
      kanjisPerPage: 10,
      page: 1,
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
    const { kanjis, searchField } = this.state;

    const filterKanjis = kanjis.filter((kanji) =>
      kanji.character.toLowerCase().includes(searchField.toLowerCase())
    );

    // const getKanjisPerPage = function (page) {
    //   const start = (page - 1) * kanjisPerPage;
    //   const end = page * kanjisPerPage;
    //   return this.state.kanjis.slice(start, end);
    // };

    // const generateMarkUp = () => {
    //   const numPages = Math.ceil(
    //     this.state.searchField.length / this.state.kanjisPerPage
    //   );
    //   console.log(numPages);

    //   //Page 1, and there are other pages
    //   if (this.state.page === 1 && numPages > 1) {
    //     return `
    //           <button data-goto="${
    //             this.state.page + 1
    //           }" class="btn--inline pagination__btn--next">
    //            <span>Page ${this.state.page + 1}</span>
    //             <svg class="search__icon">
    //               <use href="${icons}#icon-arrow-right"></use>
    //            </svg>
    //           </button>`;
    //   }

    //   //Last Page
    //   if (this.state.page === numPages && numPages > 1) {
    //     return `
    //     <button  data-goto="${
    //       this.state.page - 1
    //     }" class="btn--inline pagination__btn--prev">
    //        <svg class="search__icon">
    //           <use href="${icons}#icon-arrow-left"></use>
    //         </svg>
    //        <span>Page ${this.state.page - 1}</span>
    //       </button>
    //   `;
    //   }

    //   //Other page
    //   if (this.state.page < numPages) {
    //     return `
    //     <button  data-goto="${
    //       this.state.page - 1
    //     }" class="btn--inline pagination__btn--prev">
    //        <svg class="search__icon">
    //           <use href="${icons}#icon-arrow-left"></use>
    //         </svg>
    //        <span>Page ${this.state.page - 1}</span>
    //       </button>
    //     <button data-goto="${
    //       this.state.page + 1
    //     }" class="btn--inline pagination__btn--next">
    //      <span>Page ${this.state.page + 1}</span>
    //       <svg class="search__icon">
    //         <use href="${icons}#icon-arrow-right"></use>
    //      </svg>
    //     </button>
    //     `;
    //   }

    //   // Page 1 and there are No other pages
    //   return "";
    // };

    return (
      <div className="App">
        <h1>Learn Kanji</h1>
        <SearchBox
          placeholder="search kanji"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />

        <KanjiList kanjis={filterKanjis} />
      </div>
    );
  }
}

export default App;
