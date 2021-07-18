import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>GraphQl Basic</h1>
        <BookList />
        <AddBook />
        <AddAuthor />
      </div>
    </ApolloProvider>
  );
};

export default App;
