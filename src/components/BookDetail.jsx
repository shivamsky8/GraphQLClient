import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { getBookQuery } from "../queries/queries";
import EditBookDetail from "./EditBookDetails";

const BookDetail = ({ id }) => {
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id },
  });

  //   const [mode, setMode] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  const displayBookDetails = () => {
    if (data?.book) {
      const { book } = data;
      return (
        <div className="book-details">
          <div className="header">
            <h2>{book.name}</h2>
            <span
              className="edit-details"
              onClick={(e) => {
                console.log("Edit Mode");
              }}
            >
              Edit
            </span>
          </div>
          <p>Genre:{book.genre}</p>
          <p>Author:{book.author.name}</p>
          <p>All books by author</p>
          <ul className="other-books">
            {book.author.books.map((x) => (
              <li key={x.id}>{x.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>No Book Selected</p>;
    }
  };

  return (
    <div id="book-detail">
      <h2>Book Details</h2>
      {displayBookDetails()}
    </div>
  );
};

export default BookDetail;
