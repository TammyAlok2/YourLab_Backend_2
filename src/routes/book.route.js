
import express from "express"
import {Router } from "express"
import { bookRegister,getAllBooks } from "../controllers/Book.Controllers.js"


const router = Router()

router.post("/register",bookRegister)
router.get("/",getAllBooks)


export default router