const mongoose = require('mongoose')
const DB_URL = "mongodb+srv://agroworld_data:agroworld_data@cluster0.wehdz.mongodb.net/agroworld?retryWrites=true&w=majority"

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(con => {
    console.log("Database is connected")
}).catch(err => {
    console.log("Err in Database:", err)
})

