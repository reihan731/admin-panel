import mongoose from 'mongoose';

export const connectMongo = async () => {
    if (mongoose.connection.readyState === 1) {
        return mangoose.connection.asPromise();
    }

    return await mangoose.connect(process.env.MONGO_URL!);
};