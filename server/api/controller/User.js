const userModel = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ENC_KEY = "$SSdferxt#@22&^??23/a12bvbvg#^"

let registration = (req, res) => {
    let { username, email, password } = req.body
    if (email == "" || email === undefined || email === null) {
        res.send({ status: "ERR", massage: "Email is required" })
    }


    userModel.findOne({ email }).then(async dbres => {
        if (dbres !== null) {
            res.send({ status: "ERR", massage: "user already exsist" })
        } else {
            await bcrypt.hash(password, 10, function (err, hash) {
                if (err) {
                    res.send({ status: "ERR", massage: "something went wrong" })
                    // console.log(err)
                } else {
                    password = hash
                    console.log(password)
                    let user = new userModel({ username, email, password })
                    user.save().then(dbres => {
                        res.send({ status: "OK", massage: "Data successfully saved", data: dbres })
                    }).catch(err => {
                        res.send({ status: "ERR", massage: "something went wrong" })
                        // console.log(err)
                    })
                }
            });



        }

    }).catch(err => {
        res.send({ status: "404", massage: "something went wrong", data: [] })
        console.log(err)
    })
}

let login = async (req, res) => {

    let { email, password } = req.body
    if ((email && password) == "" || (email && password) === undefined || (email && password) === null) {
        res.send({ status: "ERR", massage: "Email and password are required" })
    }

    // console.log(password)
    let dbData = await userModel.findOne({ email })
    // console.log(dbData)
    if (dbData !== null) {
        let dbpwd = dbData['password']
        // console.log(dbpwd)
        let isSame = await bcrypt.compare(password, dbpwd)
        let { _id, name } = dbData
        if (isSame) {
            let token = await jwt.sign({ id: _id }, ENC_KEY)
            // console.log(token)
            res.send({ status: 'OK', massage: "Successfully Loggedin", data: [{ token, name }] })

        } else {
            res.send({ status: 'ERR', massage: "Something went wrong " })

        }
        // console.log(isSame)
    } else {
        res.send({ status: 'ERR', massage: "Invalid username and password" })
    }

}

module.exports = { registration, login }