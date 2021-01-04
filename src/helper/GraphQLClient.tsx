import {ApolloClient, InMemoryCache,gql} from '@apollo/client';
const domain = 'https://cfd-reactjs.herokuapp.com/';

const GraphQL = new ApolloClient({
    uri: `${domain}graphql`,
    cache: new InMemoryCache()
});

export const GraphQLClient = {
    query: (qr : string) => {
        return GraphQL.query({
            query: gql`${qr}`
        })
    }
}
  