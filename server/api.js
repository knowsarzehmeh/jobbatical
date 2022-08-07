import { GraphQLClient, gql } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

const query = gql`
  {
    jobs {
      id
      title
      slug
      commitment {
        id
      }
      cities {
        name
      }
      countries {
        name
      }
      remotes {
        name
      }
      description
      applyUrl
      company {
        name
      }
      tags {
        name
      }
      isPublished
      isFeatured
      locationNames
      userEmail
      postedAt
      createdAt
      updatedAt
    }
  }
`;

const gqlClient = new GraphQLClient("https://api.graphql.jobs");

export const fetchJobs = async () => await gqlClient.request(query);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
