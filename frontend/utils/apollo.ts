import { ApolloClient } from "apollo-client";  
import { InMemoryCache } from "apollo-cache-inmemory";  
import withApollo from "next-with-apollo";  
import { createHttpLink } from "apollo-link-http";  
import fetch from "isomorphic-unfetch";

import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const GRAPHQL_URL = `${process.env.API_URL}/graphql`;

const link = createHttpLink({  
    fetch,
    uri: GRAPHQL_URL
});

export default withApollo(  
    // You can get headers and ctx (context) from the callback params
    // e.g. ({ headers, ctx, initialState })
    ({ initialState }) =>
      new ApolloClient({
        link: link,
        cache: new InMemoryCache({ fragmentMatcher })
          .restore(initialState || {})
      })
  );