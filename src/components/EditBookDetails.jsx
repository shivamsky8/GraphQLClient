import { useQuery } from "@apollo/client";

import { getBookQuery } from "../queries/queries";

const EditBookDetail = ({ book }) => {
  console.log(book);
  return (
    <div id="edit-book-detail">
      <h2>Edit Book Details</h2>
    </div>
  );
};

export default EditBookDetail;
