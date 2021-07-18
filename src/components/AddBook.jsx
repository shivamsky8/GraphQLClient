import { useState } from "react";
// import { graphql } from "@apollo/client/react/hoc";
import { useQuery, useMutation } from "@apollo/client";
import {
  getAuthorQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { data, loading } = useQuery(getAuthorQuery);
  const [addBook] = useMutation(addBookMutation);
  const displayAuthor = () => {
    if (loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  const submitBook = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    console.log({ name, genre, authorId });
  };
  return (
    <div className="add-book">
      <form id="add-book" onSubmit={submitBook}>
        {/* <label htmlFor="">Add Book</label> */}
        <h3 style={{ textAlign: "center" }}>Add Book</h3>
        <div className="field">
          <label htmlFor="bookName">Book Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="author">Author</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select Author</option>
            {displayAuthor()}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

// export default compose(
//   graphql(getAuthorQuery, { name: "getAuthorQuery" }),
//   graphql(addBookMutation, { name: "addBookMutation" })
// )(AddBook);

export default AddBook;
