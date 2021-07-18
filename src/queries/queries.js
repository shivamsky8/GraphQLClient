import gql from "graphql-tag";

export const getAuthorQuery = gql`
  query Authors {
    authors {
      name
      id
      age
    }
  }
`;

export const getBooksQuery = gql`
  query Books {
    books {
      name
      id
      genre
    }
  }
`;

export const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      authorId
    }
  }
`;

export const addAuthorMutation = gql`
  mutation ($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
      id
    }
  }
`;

export const getBookQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
