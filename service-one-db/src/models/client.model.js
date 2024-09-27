import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    document: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token_client: {
        type: String
    }
},{
    timestamps: true
})
export default mongoose.model('Client', clientSchema);