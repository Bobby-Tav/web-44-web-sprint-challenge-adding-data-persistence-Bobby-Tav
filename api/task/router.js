// build your `/api/tasks` router here

const express = require('express');
const Tasks = require('./model')

const router = express.Router()

//GET
router.get('/', (req,res,next)=>{
        Tasks.getTasks()
        .then((stuff)=>{
            res.json(stuff)

        })
        .catch(next)
})

//POST
router.post('/', (req,res,next)=>{
    Tasks.addTasks(req.body)
    .then(res =>{
        if (res.task_completed === 0){
           res.task_completed = false; 
        }else{
            res.task_completed = true;  
        }
        res.json(res)
    }).catch(next)
        
})

module.exports = router;