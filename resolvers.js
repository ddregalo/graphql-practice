class Artist {
    constructor(id, {firstName, lastName, gender, website, styles, isAlive}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.website = website;
        this.styles = styles;
        this.isAlive = isAlive;
    }
}

const artistDatabase = {};

// resolver map
export const resolvers = {
    Query: {
        getArtist: ({id}) => {
            return new Artist(id, artistDatabase[id]);
        },
    },
    Mutation: {
        createArtist: ({input}) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            artistDatabase[id] = input;
            return new Artist(id, input);
        }
    }
};