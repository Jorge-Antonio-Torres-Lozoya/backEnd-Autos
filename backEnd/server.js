const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT
const connectDB = require('./config/db')
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/autos', require('./routes/autoRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
