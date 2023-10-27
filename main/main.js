const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const routerss = require('../routers/router.js')
dotenv.config()
const ejs = require('ejs')
app.set('view engine','ejs')
const viewPath = path.join(process.cwd(),'view')
const staticPath = path.join(process.cwd(),'public')
app.use(express.static(staticPath))
app.use('/check',express.static(staticPath))
app.set('views',viewPath)
app.use(express.urlencoded({extended:false}))
const url = process.env.URL
console.log(url);
const dbConnection = require('../db/dbConnection.js')
dbConnection(url)
app.use('/',routerss)
const a = process.env.PORT
app.listen(a,()=>{
    console.log(`listening to the port ${a}`);
})