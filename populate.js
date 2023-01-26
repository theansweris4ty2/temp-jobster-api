require("dotenv").config()
const mockData = require("./mock_data.json")

const Job = require ("./models/job")
const connectDB = require("./db/connect")

const start = async()=> {
    try{
        await connectDB (process.env.MONGO_URI)
        await Job.create(mockData)
        console.log("Success!!!")

    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}
start()
