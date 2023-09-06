import express, { response } from 'express';
import { PORT, mongoDbUrl } from './config.js';
import {mongoose} from 'mongoose';
import bookRoute from './routes/BookRoutes.js'
import cors from 'cors';

const app = express();
app.use(express.json())

// Middleware for handling CORS policy
app.use(cors())
// app.use(
//     cors({
//         origin: 'http://localhost:5173/',
//         // methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         // allowedHeaders: ['Content-Type'],
//         credentials: true,
//         optionsSuccessStatus: 200
//     })
// )

app.use('/books', bookRoute)
mongoose.connect(mongoDbUrl)
.then(() => {
    console.log('App connected to DB');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    })  
})
.catch((error) => {
    console.log(error);
})
