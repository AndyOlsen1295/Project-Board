import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
<<<<<<< Updated upstream
  query getProject {
    project {
=======
query Query {
  projects {
    projectText
    name
    _id
    comments {
      commentText
>>>>>>> Stashed changes
      _id
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
