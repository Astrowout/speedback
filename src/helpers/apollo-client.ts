import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHCMS_API_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_API_TOKEN}`,
    }
});

export default client;