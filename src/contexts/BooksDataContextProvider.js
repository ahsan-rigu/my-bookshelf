import React, { createContext, useReducer } from "react";
import books from "../database/books";

export const BooksDataContext = createContext();

const BooksDataContextProvider = ({ children }) => {
  const booksDataReducer = (state = books, { type, payload }) => {
    if (type === "UPDATE_STATUS") {
      state = state.map((book) =>
        book.id === payload.id ? { ...book, status: payload.status } : book
      );
    }
    return [...state];
  };

  const [booksData, dispatchBooksData] = useReducer(booksDataReducer, books);

  return (
    <BooksDataContext.Provider value={{ booksData, dispatchBooksData }}>
      {children}
    </BooksDataContext.Provider>
  );
};

export default BooksDataContextProvider;
