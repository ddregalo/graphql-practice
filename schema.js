import { buildSchema } from 'graphql';

// ! means non-nullable field

const schema = buildSchema(`
    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Artist {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        website: String
        styles: [Style]
        isAlive: Boolean
    }

    input ArtistInput {
        id: ID
        firstName: String!
        lastName: String!
        gender: Gender
        website: String!
        styles: [StyleInput]
        isAlive: Boolean
    }

    type Style {
        name: String
    }

    input StyleInput {
        name: String
    }

    type Mutation {
        createArtist(input: ArtistInput): Artist
    }

    type Query {
        getArtist(id: ID): Artist
    }
`);

export default schema;