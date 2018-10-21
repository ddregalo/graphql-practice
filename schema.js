import { buildSchema } from 'graphql';

// ! means non-nullable field

const schema = buildSchema(`
    type Artist {
        id: ID
        firstName: String!
        lastName: String
        website: String
        artwork: String
    }

    input ArtistInput {
        id: ID
        firstName: String!
        lastName: String!
        website: String!
        artwork: String
    }

    type Mutation {
        createArtist(input: ArtistInput): Artist
    }

    type Query {
        artist: Artist
    }
`);

export default schema;