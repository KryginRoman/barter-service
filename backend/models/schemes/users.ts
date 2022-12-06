import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/users";

const usersSchema: Schema<IUser> = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

export const User = mongoose.model('User', usersSchema);