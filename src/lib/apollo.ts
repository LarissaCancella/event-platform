import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rypsv91o1n01zc1xl125eb/master',
    cache: new InMemoryCache()
});