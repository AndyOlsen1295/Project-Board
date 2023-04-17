import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProject {
    project {
      _id
      name
      createdAt
      projectText
      comments{
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  query getSingleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      Username
      firstName
      lastName
      jobTitle
    }
  }
`;
