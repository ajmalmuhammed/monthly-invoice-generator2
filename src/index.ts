
import express from 'express';
import dotenv from "dotenv";

import * as bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 8080;


// middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/a", (req, res  )=> {
    console.log("hi there")
   res.send("Hello")
})

// app.use('/api',authRoutes);
// app.use('/api',verifyRoutes);

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen(port,()=>{
    console.log("Server has started on ",port);
});

