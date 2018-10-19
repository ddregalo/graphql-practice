import { buildSchema } from 'graphql';

// ! means non-nullable field

const schema = buildSchema(`
    type Artist {
        id: ID
        firstName: String
        lastName: String
        website: String
    }

    type Query {
        artist: Artist
    }
`)

export default schema;