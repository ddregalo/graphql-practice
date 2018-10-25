import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/artists', {
    useMongoClient: true
});

const artistSchema = new mongoose.Schema({
    firstName: {
        type: String 
    },
    lastName: {
        type: String 
    },
    gender: {
        type: String 
    },
    website: {
        type: String 
    },
    styles: {
        type: Array
    },
    isAlive: {
        type: Boolean
    }
});

const Artists = mongoose.model('artists', artistSchema);

export {Artists}; 