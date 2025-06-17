const express = require('express')
const cors = require('cors');
const { connect } = require('mongoose');
const routes =require("./routes/todoRoutes")
const connectToDb =require("./db/db")

const app=express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/user',routes)
connectToDb();
app.listen(PORT,()=>{

    console.log(`server is ruuning ${PORT}`);
    
})