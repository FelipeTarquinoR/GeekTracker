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

router.post("/tasks/add", async (req, res) =>{//Added the first post method
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
router.get("/edit", (req, res) => {
    res.render('edit')
})

//Export block
export default router