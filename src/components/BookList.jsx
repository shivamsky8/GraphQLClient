import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { data, loading } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState("");
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div id="main">
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetail id={selected} />
    </div>
  );
};

export default BookList;
