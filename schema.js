import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
 
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

export default schema;