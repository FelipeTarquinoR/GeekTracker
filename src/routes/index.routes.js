//All routes are separated in this file

//Import block
import {Router} from 'express'//router creation function import from express
import Task from '../models/TaskTest'//Task Model Import

const router = Router()

//Main page route and content
router.get("/", async (req, res) => {
    const tasks = await Task.find().lean()//consulting model in the database and saving to a constant - Lean method transforms mongodb objects to javascript objects
    res.render('index', {tasks: tasks})//Passing the array to the Index html file
})

router.post("/tasks/add", async (req, res) =>{//Added the adding tasks post method
    try {
        const task = Task(req.body)
        await task.save()//Mongo function to save objects
        res.redirect('/')//This response redirects to the page I need
    } catch (error) {
        console.log(error)
    }
})

//About test page route created
router.get("/about", (req, res) => {
    res.render('about')
})

//Edit test page route created
router.get("/edit/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()//Id has to be the same thing that was put after the ":" in the route
        res.render('edit', {task: task})//Passing the object to index html file
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/edit/:id', async (req, res) => {//Editing tasks post method, as this function uses the same route as the get one, the method is specified in the html
    const {id} = req.params//Take the Id that comes from the post method
    await Task.findByIdAndUpdate(id, req.body)
    console.log(req.body)
    res.redirect('/')
})

//Delete test page and method created
router.get("/delete/:id", async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.redirect("/")
})

//Export block
export default router