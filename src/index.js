
import connectDB from './db/index.js'
import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config({
    path:'./env'
})




connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})












/*
import express from 'express'
const app = express()
(async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERRor:", error)
            throw err
        })
        app.listen(process.env.PORT,() => {
            console.log(`the app is is listening on ${process.env.PORT}`)
        })
    }
    catch (error){
        console.log("ERROR:", error)
        throw err
    }
}) ()

*/