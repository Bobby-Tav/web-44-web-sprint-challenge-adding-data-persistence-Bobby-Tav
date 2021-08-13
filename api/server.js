// build your server here and require it from index.js
require('dotenv').config()

const express = require('express');
const helmet = require('helmet')

const server = express()

server.use(helmet());
server.use(express.json());

server.get('/', (req, res, next) => {
    res.send(`
      <h2>This is a test</h2>
      <p>Testing</p>
    `);
  });
  server.use('*', (req, res, next) => {
    console.log(`hitting ${req.method} ${req.baseUrl}`);
    next({ status: 404, message: 'not found' }); // this object becomes the "err" in the midd below
  });
  
  server.use((err, req, res, next) => { 
    res.status(err.status || 500).json({ message: `Not working` });
  });

module.exports = server;