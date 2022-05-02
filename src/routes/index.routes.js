//All routes are separated in this file

//Import block
import {Router} from 'express'//router creation function import from express
import {renderHome, addTask, renderEdit, editTask, deleteTask, toggleDone} from '../controllers/tasks.controller'//Importing the controller methods

const router = Router()//Router object creation

router.get("/", renderHome)//Home rendering route

router.post("/tasks/add", addTask)//Add task route

router.get("/tasks/:id/edit", renderEdit)//Edit rendering route

router.post('/tasks/:id/edit', editTask)//Edit task route

router.get("/tasks/:id/delete", deleteTask)//Delete task route

router.get("/tasks/:id/toggleDone", toggleDone)//Toggle task Done route

//Export block
export default router