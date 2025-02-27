require('dotenv').config();
const express =require('express');
const connectToDb=require('./database/db')
const authRoutes=require('./routes/auth-routes')
const homeRoutes=require('./routes/home-routes')

const adminRoutes=require('./routes/admin-route')
const uploadImageRoutes=require('./routes/image-routes')

connectToDb()

const app=express()

const PORT =process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/image',uploadImageRoutes)


app.listen(PORT,(req,res)=>{
    console.log(`server is running at ${PORT}`)
})