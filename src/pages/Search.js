import React, { useContext, useState } from "react";
import "./search.css";
import { BooksDataContext } from "../contexts/BooksDataContextProvider";
import BookCard from "../components/BookCard";

const Search = () => {
  const { booksData } = useContext(BooksDataContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = booksData.filter(
    ({ name, author }) =>
      (name.toLowerCase().includes(searchQuery) ||
        author.toLowerCase().includes(searchQuery)) &&
      searchQuery.length > 0
  );
  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="search here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
      ></input>
      <div className="shelve">
        {filteredData.length > 0 ? (
          filteredData.map((book) => <BookCard book={book} key={book.id} />)
        ) : (
          <h3 className="warn">NOTHING HERE YET</h3>
        )}
      </div>
    </div>
  );
};

export default Search;
