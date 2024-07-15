
import express from "express"
import {Router } from "express"

import { bookRegister, deleteOneBook, getAllBooks, getOneBook, updateOneBook} from '../controllers/Book.Controllers.js'

const router = Router()



router 
  .route('/')
  .get(getAllBooks)
  .post(bookRegister)
  
router
   .route('/:id')
   .get(getOneBook)
   .put(updateOneBook)
   .delete(deleteOneBook)  



export default router