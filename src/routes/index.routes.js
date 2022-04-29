//All routes are separated in this file

//Import block
import {Router} from 'express'//router creation function import from express

const router = Router()

//Main page route and content
router.get("/", (req, res) => {
    res.render('index')
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