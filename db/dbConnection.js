const mongoose = require('mongoose')
const dbConnection = async(URL)=>{
    try{
        const obj = {
            dbName : process.env.DBNAME
        }
        mongoose.connect(URL,obj)
        console.log('connected...');
    }
    catch(err){
        console.log(err);
    }
}
module.exports = dbConnection