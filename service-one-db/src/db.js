import mongoose from "mongoose";
import { config } from 'dotenv';
config();


export const connectDB = async () => {

    try {

        const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } = process.env;
        const dbUri = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

        await mongoose.connect(dbUri,{
            authSource: 'admin'
        });
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }

}

