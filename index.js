import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL Testing 1-2 1-2 ");
});

class Artist {
    constructor(id, {firstName, lastName, website, artwork}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.website = website;
        this.artwork = artwork;
    };
}

const artistDatabase = {};

const root = {
    artist: () => {
        return {
            "id": 12345678,
            "firstName": "Jean Michel",
            "lastName": "Basquiat",
            "website": "http://basquiat.com/",
            "artwork": "Self Portrait I"
        }; 
    },
    createArtist: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        artistDatabase[id] = input;
        return new Artist(id, input);
    }
}; 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log("Running server on port localhost:8080/graphql"));
