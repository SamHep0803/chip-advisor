import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type Chip {
    id: String
    name: String
    address: String
    rating: Int
    description: String
    photoUrl: String
    createdAt: String
    updatedAt: String
    userId: String
  }
    type Query {
      chips: [Chip]!
    }
`

