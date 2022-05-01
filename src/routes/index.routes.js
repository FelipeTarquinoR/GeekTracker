//All routes are separated in this file

//Import block
import {Router} from 'express'//router creation function import from express
import Task from '../models/TaskTest'//Task Model Import

const router = Router()

//Main page route and content
router.get("/", (req, res) => {
    res.render('index')
})

router.post("/tasks/add", (req, res) =>{//Added the first post method
    const task = Task(req.body)
    res.send('saved')
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