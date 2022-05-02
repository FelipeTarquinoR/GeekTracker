//Import block
import Task from "../models/TaskTest"//Task model import

//Home rendering
export const renderHome = async (req, res) => {
    const tasks = await Task.find().lean()//consulting model in the database and saving to a constant - Lean method transforms mongodb objects to javascript objects
    res.render('index', {tasks: tasks})//Passing the array to the Index html file
}

//Add task method
export const addTask = async (req, res) =>{//Adding tasks post method
    try {
        const task = Task(req.body)
        await task.save()//Mongo function to save objects
        res.redirect('/')//This response redirects to the page I need
    } catch (error) {
        console.log(error)
    }
}

//Edit page rendering
export const renderEdit = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()//Id has to be the same thing that was put after the ":" in the route
        res.render('edit', {task: task})//Passing the object to index html file
    } catch (error) {
        console.log(error.message)
    }
}

//Edit task method
export const editTask = async (req, res) => {//Editing tasks post method, as this function uses the same route as the get one, the method is specified in the html
    const {id} = req.params//Take the Id that comes from the post method
    await Task.findByIdAndUpdate(id, req.body)
    console.log(req.body)
    res.redirect('/')
}

//Delete Task method
export const deleteTask = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.redirect("/")
}

//Mark task as done/undone method
export const toggleDone = async (req, res) => {
    const {id} = req.params//Takes the id
    const task = await Task.findById(id)//Find the task with the id
    task.done = !task.done//Invert the done property value
    await task.save()//Save the task
    res.redirect("/")
}