
import fs from 'fs'

var data = fs.readFileSync('./movies.json');
var elements = JSON.parse(data);
// console.log(elements)

const getAllMovies = async(req,res)=>{
   res.send(elements)
}

export {
    getAllMovies

}