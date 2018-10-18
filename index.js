import express from 'express';

const app = express();

app.get('/', (req, res, err) => {
    res.send("GraphQL Testing 1-2 1-2 ");
});

app.listen(8080, () => console.log("Running server on port localhost:8080/graphql"));
