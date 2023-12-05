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
const MessageRoute = require('./routes/MessageRoute');
const ScreeningRoute = require('./routes/ScreeningRoute');
const TestimoniRoute = require('./routes/TestimoniRoute');
const AuthRoute = require('./routes/AuthRoute');

// ROUTES
app.use(UserRoute);
app.use(MessageRoute);
app.use(ScreeningRoute);
app.use(TestimoniRoute);
app.use(AuthRoute);

// ROUTE JIKA URLNYA TIDAK ADA, MAKA AKAN MENAMPILKAN PESAN JSON YAITU NOT FOUND
app.get('*', (req, res) => res.json({message: 'Not Found'}));



// SERVER LISTEN
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));