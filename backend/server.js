const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
// const port = process.env.PORT || 8000;
const app = express();
const goalsRoute = require('./routes/goalRoutes');
const usersRoute = require('./routes/userRoutes');
const { errorHandler}  = require('./middlewares/errorMiddleware');
const connectDb = require('./config/db')

connectDb();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/goals',goalsRoute);
app.use('/api/user',usersRoute);

app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
