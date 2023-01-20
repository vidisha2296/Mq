import {Router} from "express"
import { getAllMovies } from "../movies.js"
const router = Router()
router.route('/getAllMovies').get(getAllMovies)
export default router