import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`

export const LOGIN_USER =gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`

export const SAVE_BOOK =gql`
mutation saveBook($authors: [String], $description: String,
    $bookId: ID,
    $image: String,
    $link: String,
    $title: String) {
    saveBook(authors: $authors, description: $description,
        bookId: $bookId,
        image: $image,
        link: $link,
        title: $title) {
            _id
            username
            email
            password
            bookCount
            savedBooks {
                authors
    description
    bookId
    image
    link
    title
            }
        }
  }
`;

export const REMOVE_BOOK =gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        password
        bookCount
        savedBooks {
            authors
description
bookId
image
link
title
      }
    }
  }
`;