import { buildSchema } from 'graphql';

// ! means non-nullable field

const schema = buildSchema(`
    type Artist {
        id: ID
        firstName: String!
        lastName: String
        website: String
        artwork: String
        isAlive: Boolean
    }

    input ArtistInput {
        id: ID
        firstName: String!
        lastName: String!
        website: String!
        artwork: String
        isAlive: Boolean
    }

    type Mutation {
        createArtist(input: ArtistInput): Artist
    }

    type Query {
        getArtist(id: ID): Artist
    }
`);

export default schema;