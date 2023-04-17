import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject($projectText: String!, $name: String!) {
    addProject(projectText: $projectText, name: name) {
      _id
      name
      projectText
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
