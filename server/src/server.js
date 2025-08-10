import 'dotenv/config'
import express from "express"
const app = express()
import cors from "cors"
import {checkDataBaseConnection} from "./databaseConnection/dbConnect.js"

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())

const SERVER_PORT = 5000

import router from "./route/userRoute.js"
app.use("/api" , router)

const startServer = async () => {
    const result = await checkDataBaseConnection()

    if(result){
        app.listen(SERVER_PORT , () => {
            console.log(`Server started on port ${SERVER_PORT}`)
        })
    }else{
        process.exit(1)
    }
}

startServer()