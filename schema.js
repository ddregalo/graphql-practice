import { buildSchema } from 'graphql';

// ! means non-nullable field

const schema = buildSchema(`
    type Artist {
        id: ID
        firstName: String!
        lastName: String
        website: String
        artworks: [artwork]
    }

    type artwork {
        title: String
        year: Int
    }

    type Query {
        artist: Artist
    }
`);

export default schema;