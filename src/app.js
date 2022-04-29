//App object configuration file

//Import block
import express from "express"
import indexRoutes from "./routes/index.routes"
import {create} from "express-handlebars";
import path from "path"

//App object creation
const app = express()


//Express Handlebars config
app.set("views", path.join(__dirname, "views"))//Views property setup, now views can be used as the direct path to the hbs(html) files

const hbs = create({//Creation of the hbs extention usage
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "common",
    extname: ".hbs"
})

app.engine(".hbs", hbs.engine)//Engine creation
app.set('view engine', ".hbs")//Engine setup

//Router object usage
app.use(indexRoutes)

//Export block
export default app