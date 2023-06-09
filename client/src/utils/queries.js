import { gql } from "@apollo/client";

export const QUERY_MEMES = gql`
  query {
    memes {
      _id
      imageUrl
      creator {
        _id
        username
      }
      likes
      likedBy {
        _id
        username
      }
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      _id
      email
      username
      memes {
        _id
        imageUrl
        creator {
          _id
          username
          email
        }
        likes
        likedBy {
          _id
          username
        }
      }
    }
  }
`;



export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      email
      username
      memes {
        _id
        imageUrl
        creator {
          _id
          username
          email
        }
        likes
        likedBy {
          _id
          username
        }
        likes
        likedBy {
          _id
          username
        }
      }
    }
  }
`;

// query for single meme
export const QUERY_MEME = gql`
  query meme($id: ID!) {
    meme(_id: $id) {
      _id
      imageUrl
      creator {
        _id
        username
      }
      likes
      likedBy {
        _id
        username
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
      email
      memes {
        _id
        imageUrl
        creator {
          _id
          username
          email
        }
        likes
        likedBy {
          _id
          username
        }
      }
    }
  }
`;



