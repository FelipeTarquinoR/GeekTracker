//app execution file

//Import block
import app from "./app"
import './database'

//App object listens to 3000 port
app.listen(3000)
console.log("Server on port", 3000)