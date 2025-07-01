import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectToDB from './config/db.js';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 4000

await connectToDB();

// ALLOWED MULTIPLE ORIGINS 
const allowedOrigin =['http://localhost:5173'];

// MIDDELWARE CONFIGURATIONS
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin : allowedOrigin, credentials : true}))

app.get('/', (req, res) => {
    res.send("API IS WORKING")
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
})