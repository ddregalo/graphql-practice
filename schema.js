import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

// ! means non-nullable field

const typeDefs = `
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

    type Query {
        getArtist(id: ID): Artist
    }

    type Mutation {
        createArtist(input: ArtistInput): Artist
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };