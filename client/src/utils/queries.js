import { gql } from '@apollo/client';

export const QUERY_LISTINGS_BY_CATEGORY = gql`
query listingsByCategory($category: String!) {
  listingsByCategory(category: $category) {
    _id
    title
    owner
    address
    description
    images
    pricePerHour
    availability
    rating
    capacity
    rules
    amenities
    createdAt
    category {
      _id
      name
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
query Categories {
  categories {
    _id
    name
  }
}
`



export const GET_CHECKOUT = gql`
query checkout($listingId: ID!, $startTime: String!, $endTime: String!) {
  checkout(listingId: $listingId, startTime: $startTime, endTime: $endTime) {
    session
  }
}


`

  export const GET_LISTING = gql`
  query listing($listingId: ID!) {
    listing(listingId: $listingId) {
      _id
      title
      owner
      address
      description
      images
      pricePerHour
      availability
      rating
      capacity
      rules
      amenities
      createdAt
      category {
        _id
        name
      }
    }
  }
  `

  export const GET_BOOKINGS= gql`
  query User {
    user {
      _id
      email
      firstName
      lastName
      username
      bookings {
        _id
        listing {
          _id
          title
          owner
          address
          description
          images
          pricePerHour
          availability
          rating
          capacity
          rules
          amenities
          createdAt
          category {
            _id
            name
          }
        }
        startTime
        endTime
        totalPrice
        createdAt
      }
    }
  }
  `