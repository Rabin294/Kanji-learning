import React from "react";
import "./pagination.styles.css";

function Pagination(props) {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalKanjis / props.kanjisPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => props.paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

/*
const generateMarkUp = () => {
    const numPages = Math.ceil(
      this.state.searchField.length / this.state.kanjisPerPage
    );

    //Page 1, and there are other pages
    if (this.state.page === 1 && numPages > 1) {
      return `
                  <button data-goto="${
                    this.state.currentPage + 1
                  }" class="btn--inline pagination__btn--next">
                   <span>Page ${this.state.currentPage + 1}</span>
                    <svg class="search__icon">
                    // <use href="#icon-arrow-right">
                      <use href="#icon-arrow-right"></use>
                   </svg>
                  </button>`;
    }

    //Last Page
    if (this.state.currentPage === numPages && numPages > 1) {
      return `
            <button  data-goto="${
              this.state.currentPage - 1
            }" class="btn--inline pagination__btn--prev">
               <svg class="search__icon">
                  <use href="#icon-arrow-left"></use>
                </svg>
               <span>Page ${this.state.currentPage - 1}</span>
              </button>
          `;
    }

    //Other page
    if (this.state.currentPage < numPages) {
      return `
            <button  data-goto="${
              this.state.currentPage - 1
            }" class="btn--inline pagination__btn--prev">
               <svg class="search__icon">
                  <use href="#icon-arrow-left"></use>
                </svg>
               <span>Page ${this.state.currentPage - 1}</span>
              </button>
            <button data-goto="${
              this.state.currentPage + 1
            }" class="btn--inline pagination__btn--next">
             <span>Page ${this.state.currentPage + 1}</span>
              <svg class="search__icon">
                <use href="#icon-arrow-right"></use>
             </svg>
            </button>
            `;
    }

    // Page 1 and there are No other pages
    return "";
  };*/
