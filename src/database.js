//Data base connection configuration

//Import block
import {connect} from 'mongoose' //Imported connect method only and not the whole mongo object

//Mongo DB connection using an anonymous and asyncronous function
(async() =>{
    try {
        const db = await connect('mongodb://localhost/geek-tracker-db')//Await operator is used in async functions. After that, the connection is stored in an object
        console.log('DB connected to', db.connection.name)//After the connection is stored in an object, a log with the connection name is pronted
    } catch (error) {
        console.error(error)
    }
})()