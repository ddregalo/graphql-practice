import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL Testing 1-2 1-2 ");
});

const root = {
    artist: () => {
        return {
            "id": 12345678,
            "firstName": "Jean Michel",
            "lastName": "Basquiat",
            "website": "http://basquiat.com/"
        } 
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log("Running server on port localhost:8080/graphql"));
