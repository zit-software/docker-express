const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

/**
 * @type {number}
 */
const port = process.env.PORT || 3000; // Port to run server on
/**
 * @type {string}
 */
const mongodbUri = process.env.MONGODB_URI; // MongoDB URI

/**
 * @returns {Promise<void>}
 */
const start = async () => {
    try {
        // Try to connect to mongodb
        const connect = await mongoose.connect(mongodbUri);
        console.log('Connected to mongodb');

        // Create express app
        const app = express();

        // Create routes
        app.get('/', (req, res) => {
            res.json({
                message: 'Server is running',
                href: 'https://fb.com/zit-software',
                database: connect.connection.db.databaseName,
            });
        })

        // Start server
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        // If error, log it
        console.error('Server: ', error);

        // Exit process
        process.exit(1);
    }
};

start(); // Start server
