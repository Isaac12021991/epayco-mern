import mongoose from "mongoose";

const ShoppingSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    },
    code_request: {
        type: String,
        trim: true,
        default: Math.floor(100000 + Math.random() * 900000)
    },
    status: {
        type: String,
        required: true,
        trim: true,
        default: 'Pending'
    },
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
    
},{
    timestamps: true
}) 

export default mongoose.model('Shopping', ShoppingSchema);