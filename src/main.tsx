import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AuthContext from "./context/AuthContext";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_APP_BACKENED_URL}graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <AuthContext>
          <App />
        </AuthContext>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
