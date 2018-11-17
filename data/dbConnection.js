import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/artists', {
    // useMongoClient: true
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

const sequelize = new Sequelize('database', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './aliens.sqlite',
    operatorsAliases: false
});

const Aliens = sequelize.define('aliens', {
    firstName: Sequelize.STRING,
    lasttName: Sequelize.STRING,
    planet: Sequelize.STRING
});

sequelize.sync({force: true}).then(() => {
    Aliens.create({
        firstName: 'Jon',
        lastName: 'James',
        planet: 'LooseCanonPlayaz'
    });
});

export {Artists, Aliens}; 