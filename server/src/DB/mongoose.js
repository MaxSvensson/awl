const mongoose = require('mongoose');


mongoose.connect('mongodb://mongo:27017/awl', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    keepAlive: true,
}).then(() => {
    console.log('Connected to db')
})