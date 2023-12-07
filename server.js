// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { sendEmail } = require('./emailService');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB (replace 'your_mongo_db_connection_string' with your actual connection string)
mongoose.connect('mongodb+srv://manish:reddy@cluster0.bwygebg.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a simple MongoDB model
const Operation = mongoose.model('Operation', { data: String });

// API endpoint to perform an operation
app.post('/api/performOperation', async (req, res) => {
  try {
    // Save operation data to MongoDB
    const { data } = req.body;
    const operation = new Operation({ data });
    await operation.save();

    // Send email
    const subject = 'Operation Performed';
    const text = `Operation data: ${data}`;
    sendEmail('manish@mushroomworldbpl.com', subject, text);

    res.status(200).json({ success: true, message: 'Operation successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
