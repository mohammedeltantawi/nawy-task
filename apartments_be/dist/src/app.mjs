import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { apartmentsRouter } from "./routes/apartments.router.mjs";
dotenv.config();
const MongoDB_Connection_String = process.env.MONGODB_URL ?? "";
async function connectToMongoDB(connectionString) {
    await mongoose.connect(connectionString);
    console.log('Connected to DB');
}
try {
    await connectToMongoDB(MongoDB_Connection_String);
}
catch (e) {
    console.log('error connecting to Mongo', e);
}
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/apartments', apartmentsRouter);
app.get('/', (req, res) => {
    res.send('well done!');
});
app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});
//# sourceMappingURL=app.mjs.map