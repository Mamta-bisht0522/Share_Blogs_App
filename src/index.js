const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')


let app = express()
app.use(express.json())


mongoose.set("strictPopulate", false)
mongoose.connect('mongodb+srv://mamtabisht0522:dhhZKPVMWCvdAjSB@cluster0.elxtqti.mongodb.net/Share_Blogs_App', { useNewUrlParser: true })
    .then(() => { console.log('mongoDB is connected') })
    .catch((error) => { console.log(error) })

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('PORT is connected on 3000')
})
