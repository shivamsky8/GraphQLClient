import { useState } from "react";
// import { graphql } from "@apollo/client/react/hoc";
import { useMutation } from "@apollo/client";
import { addAuthorMutation, getAuthorQuery } from "../queries/queries";

const AddAuthor = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [addAuthor] = useMutation(addAuthorMutation);

  const submitAuthor = (e) => {
    e.preventDefault();
    console.log(typeof age);
    addAuthor({
      variables: {
        name: name,
        age: parseInt(age),
      },
      refetchQueries: [{ query: getAuthorQuery }],
    });
  };
  return (
    <div className="add-author">
      <form id="add-author" onSubmit={submitAuthor}>
        <h3 style={{ textAlign: "center" }}>Add Author</h3>
        <div className="field">
          <label htmlFor="bookName">Author Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="genre">Age:</label>
          <input type="text" onChange={(e) => setAge(e.target.value)} />
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddAuthor;
