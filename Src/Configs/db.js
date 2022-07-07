const mongoose = require("mongoose");

module.exports = () => {
return mongoose.connect("mongodb+srv://Alok0818:8308303270@cluster0.pmkry.mongodb.net/influxassignment?retryWrites=true&w=majority");
};