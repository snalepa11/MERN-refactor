const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
}
type Book {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
},
type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook( bookAuthorArray: [String] , description: String, title: String, bookId: ID, image: String , link: String): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;