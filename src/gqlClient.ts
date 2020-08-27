import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:4000/api";

const graphQLClient = new GraphQLClient(endpoint);

export default graphQLClient;
