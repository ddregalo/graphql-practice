import mongoose from 'mongoose';
import { Artists } from './dbConnection';
import { resolve } from 'dns';

// resolver map
export const resolvers = {
    Query: {
        getArtist: ({id}) => {
            return new Artist(id, artistDatabase[id]);
        },
    },
    Mutation: {
        createArtist: (root, {input}) => {
             const newArtist = new Artists({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                website: input.website,
                styles: input.styles,
                isAlive: input.isAlive
             });

             newArtist.id = newArtist._id

             return new Promise((resolve, object) => {
                newArtist.save((err) => {
                    if (err) reject(err)
                    else resolve(newArtist)
                });
             });
        }
    }
};