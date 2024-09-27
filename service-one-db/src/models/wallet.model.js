import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    },
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
},{
    timestamps: true
})


const walletMovementSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    },
    movement: {
        type: String,
        required: true,
        trim: true
    },
    wallet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' }
},{
    timestamps: true
}) 

// Exportar ambos modelos
export const Wallet = mongoose.model('Wallet', walletSchema);
export const WalletMovement = mongoose.model('WalletMovement', walletMovementSchema);