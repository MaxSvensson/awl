const express = require('express');
const bodyParser = require('body-parser');
// const helmet = require('helmet');

// Import db
require('./DB/mongoose');

// Routes
const questionsRoute = require('./routers/questions');
const Measure = require('./DB/models/Measure');
const User = require('./DB/models/user');

const app = express();

// Routes paths
app.use('/questions', questionsRoute);


const PORT = process.env.PORT || 3030
app.listen(PORT, () => console.log('Started server'))

