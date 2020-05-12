const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/Insure';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('MongoDB not Connected', err);

    } else {
        console.log("MongoDB connected Successfully");

    }
});

module.exports = mongoose;