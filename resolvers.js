class Artist {
    constructor(id, {firstName, lastName, website, artwork}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.website = website;
        this.artwork = artwork;
    }
}

const artistDatabase = {};

const resolvers = {
    getArtist: ({id}) => {
        return new Artist(id, artistDatabase[id]);
    },
    createArtist: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        artistDatabase[id] = input;
        return new Artist(id, input);
    }
};

export default resolvers; 