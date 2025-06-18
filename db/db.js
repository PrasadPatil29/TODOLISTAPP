const mongoose = require('mongoose')
require('dotenv').config();

function connectToDb() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected To Db");
    }).catch(err => console.log(err));
}
//connectToDb();


module.exports=connectToDb;