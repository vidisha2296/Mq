import express from 'express'
import fs from 'fs'
import movies from  './routes/movies.js'
import cors from 'cors'
const app = express()
// var data = fs.readFileSync('./movies.json');
  
// var elements = JSON.parse(data);
// console.log(elements)
app.use(cors())
app.use('/api/v1',movies)
const PORT = 4001
app.listen(PORT,()=>console.log(`Running successfully ${PORT}`))