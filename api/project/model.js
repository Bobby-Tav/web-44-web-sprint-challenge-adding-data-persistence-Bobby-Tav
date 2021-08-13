// build your `Project` model here
const db = require('./../../data/dbConfig');

//GET
function getProject(){
    return db('projects')
}

//POST
async function addProject(newProjects){
      return db('projects').insert(newProjects)
     
}

module.exports = {getProject,addProject}


