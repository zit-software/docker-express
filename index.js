const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

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
		console.log("CONNECTED TO MONGODB: ", connect.connection.db.databaseName);

		// Create express app
		const app = express();

		// Create routes
		app.get("/", async (req, res) => {
			res.status(200).json({
				message: "Server is running",
			});
		});

		// Start server
		app.listen(port, () => {
			console.log(`SERVER STARTED ON http://localhost:${port}`);
		});
	} catch (error) {
		// If error, log it
		console.error("SERVER ERROR: ", error);

		// Exit process
		process.exit(1);
	}
};

start()
	.then(() => console.log("SERVER IS STARTED SUCCESSFULLY"))
	.catch((error) => console.log("SERVER ERROR", error));
