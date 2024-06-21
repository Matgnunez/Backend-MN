const express = require('express')
const dotenv = require('dotenv')
//const cors = require('cors')
dotenv.config()

//const {database} = require('./config/connection.sql.js')

const { authRouter } = require('./auth/auth.router.js')




const PORT = process.env.PORT || 4000
const app = express()


//app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)


app.listen (PORT, () =>{
    console.log('Nuestra aplicacion se ejecuta en el puerto: ' + PORT)
})