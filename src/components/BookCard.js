import React, { useContext } from "react";
import "./book-card.css";
import { BooksDataContext } from "../contexts/BooksDataContextProvider";

const BookCard = ({ book: { id, name, status, author, image } }) => {
  const { dispatchBooksData } = useContext(BooksDataContext);

  const updateStatus = (event) => {
    dispatchBooksData({
      type: "UPDATE_STATUS",
      payload: { id, status: event.target.value },
    });
  };
  image =
    "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c";

  return (
    <article className="container-book" key={id}>
      <img src={image} alt={name + " cover"} className="img-cover" />
      <h3 className="title-tag">{name}</h3>
      <h4 className="author-tag">By: {author}</h4>
      <select
        name="status"
        id="shelves"
        className="drop-down"
        onChange={updateStatus}
      >
        <option value="none" selected={status === "none"}>
          None
        </option>
        <option value="reading" selected={status === "reading"}>
          Reading
        </option>
        <option value="to be read" selected={status === "to be read"}>
          To Be Read
        </option>
        <option value="read" selected={status === "read"}>
          Read
        </option>
      </select>
    </article>
  );
};

export default BookCard;
