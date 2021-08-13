// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()


router.post('/', async (req,res,next)=>{
    try{
       const item = await Projects.addProjects(req.body)
       res.json(item)
    }catch(err){
        next(err)
    }
})
router.get('/', async (req,res,next)=>{
    try{
     const projects =  await Projects.getProjects()
     res.json("works")
    }catch(err){
        next(err)
    }
})

module.exports = router;