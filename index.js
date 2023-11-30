// LIBRARY
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');


// INIT
dotenv.config();
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const UserRoute = require('./routes/UserRoute');
const MusicRoute = require('./routes/MusicRoute');
const MessageRoute = require('./routes/MessageRoute');
const ScreeningRoute = require('./routes/ScreeningRoute');

// ROUTES
app.use(UserRoute);
app.use(MusicRoute);
app.use(MessageRoute);
app.use(ScreeningRoute);

// ROUTE JIKA URLNYA TIDAK ADA, MAKA AKAN MENAMPILKAN PESAN JSON YAITU NOT FOUND
app.get('*', (req, res) => res.json({message: 'Not Found'}));



// SERVER LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));