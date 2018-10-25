import mongoose from 'mongoose';
import sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

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

// SQL

const Sequelize = new sequelize('database', null, null, {
    dialect: 'sqlite3',
    storage: './aliens.sqlite'
});

const Aliens = sequelize.define('artits', {
    firstName: {type: sequelize.STRING},
    lasttName: {type: sequelize.STRING},
    planet: {type: sequelize.STRING}
});

Aliens.sync({force: true}).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual._first_name,
            lastName: casual._last_name,
            planet: casual.word
        });
    });
});

export {Artists, Aliens}; 