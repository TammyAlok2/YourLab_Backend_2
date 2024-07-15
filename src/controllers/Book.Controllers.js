

// register book controllers 

import asyncHandler from "../middlewares/asyncHandler.js";
import Book from "../models/Book.Models.js";
import ApiResponse from '../utils/ApiResponse.js'

import AppError from '../utils/AppError.js'

export const bookRegister = asyncHandler(async(req,res,next)=>{
    const {fullName,authorName, bookDescription, pages , publishedDate} = req.body;
// taking datas from form 
    
// check if the data is there or not , if not send the error

if(!fullName || !authorName || !bookDescription  || !pages || !publishedDate){
    return next(new AppError("All fields are required",400))
}
const book = await Book.create({
    fullName,authorName,bookDescription,pages,publishedDate
})
if(!book){
    return next(new AppError("Something went wrong ",400))
}


return res.status(200).json(
    new ApiResponse(201,book,"book Created Successfully ")
)

}) 


export const getAllBooks = asyncHandler(async (req,res,next)=>{
    const books = await Book.find({})

    res.status(200).json(
        new ApiResponse(201,books,"All Books are here ")
    )
})