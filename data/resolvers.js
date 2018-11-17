import mongoose from 'mongoose';
import { Artists, Aliens } from './dbConnection';
import { resolve } from 'dns';

// resolver map
export const resolvers = {
    Query: {
        getArtist: ({id}) => {
            return new Artist(id, artistDatabase[id]);
        },
        getAliens: () => {
            return Aliens.findAll();
        }
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
        },

        updateArtist: (root, {input}) => {
            return new Promise((resolve, object) => {
                Artists.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, artist) => {
                    if (err) reject(err)
                    else resolve(artist)
                })
            })
        },

        deleteArtist: (root, {id}) => {
            return new Promise((resolve, object) => {
                Artists.remove({_id: id}, (err) => {
                    if (err) reject(err)
                    else resolve("Artist was deleted successfully.")
                })
            })
        }
    }
};