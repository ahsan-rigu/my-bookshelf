import React, { useContext } from "react";
import "./home.css";
import { BooksDataContext } from "../contexts/BooksDataContextProvider";
import BookCard from "../components/BookCard";

const shelves = ["READING", "TO BE READ", "READ"];

const Home = () => {
  const { booksData } = useContext(BooksDataContext);
  return (
    <>
      {shelves.map((shelve) => {
        return (
          <div key={shelve}>
            <h2 className="shelve-title">{shelve}</h2>
            <div className="shelve">
              {booksData
                .filter(({ status }) => status === shelve.toLowerCase())
                .map((book) => (
                  <BookCard book={book} key={book.id} />
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
