import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        firstName: {
            type:String,
            requre: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type:String,
            requre: true,
            min: 2,
            max: 50,
        },
        email: {
            type:String,
            requre: true,
            max: 50,
            unique: true,
        },
        password: {
            type:String,
            requre: true,
            min: 8,
        }
    }, {
        timestamps: true
    })

export const User = mongoose.model('User', UserSchema)
