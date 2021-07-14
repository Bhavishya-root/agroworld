const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
// const port=process.env.PORT || 5000
const userRouter = require('./api/router/User')
const addproductRouter = require('./api/router/Addproduct')
const shopRouter = require('./api/router/Shop')
require('./database/db')

const app = express()

app.use(cors())

app.use("/uploads", express.static("uploads"));

app.get('/', function (req, res) {
    res.send({ status: true, message: "working" });
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/product', addproductRouter)
app.use('/shop', shopRouter)


app.listen(5000, () => {
    console.log("server is running port : 5000")
})