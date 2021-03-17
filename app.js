const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());

// connet to mongoDB
const connectDB = require('./mongoConfig/mongoDB');
connectDB();

app.use(express.json({ extended: true }));

// API routes
app.use('/api', require('./routes/allData'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at port ${PORT}`));
