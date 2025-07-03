import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectToDB from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoutes.js';
import sellerRouter from './routes/sellerRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';

const app = express();
const port = process.env.PORT || 4000

await connectToDB();
await connectCloudinary();

// ALLOWED MULTIPLE ORIGINS 
const allowedOrigin =['http://localhost:5173'];

// MIDDELWARE CONFIGURATIONS
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin : allowedOrigin, credentials : true}))

app.get('/', (req, res) => {res.send("API IS WORKING")})
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
})