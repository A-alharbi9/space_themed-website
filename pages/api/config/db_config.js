const mongoose = require('mongoose');

require('dotenv').config({ path: '.env.local' });

let cached = global.mongoose;

if (!cached) {
    global.mongoose = { dbConnection: null, dbPromise: null };
    cached = global.mongoose;
}

async function connectDb() {
    try {
        if (cached.dbConnection) {
            console.log('Use prev db connection!');
            return cached.dbConnection;
        }
        if (!cached.dbPromise) {
            const dbUri = process.env.DB_URI;

            cached.dbPromise = await mongoose
                .connect(dbUri)
                .then((mongooseConnection) => {
                    console.log('Db connected!');

                    return mongooseConnection;
                })
                .catch((error) => {
                    console.log('Could not connect to db!');

                    console.log('err: ', error.message);
                    return error;
                });
        }
        cached.dbConnection = await cached.dbPromise;

        return cached.dbConnection;
    } catch (error) {
        console.log('err: ', error.message);
        return error;
    }
}

module.exports = connectDb;
