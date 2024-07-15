

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

export const deleteOneBook = asyncHandler(async (req,res,next)=>{
    const book = await Book.findById(req.params.id);

    if(!book){
        return next(new AppError("Book Not found",400))
    }
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(
        new ApiResponse(201,book,"Book deleted successfullly ")
    )
})

export const updateOneBook = asyncHandler(async(req,res,next)=>{
    const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!book){
        return next(new AppError("Book not found",400))
    }

    res.status(200).json(
        new ApiResponse(201,book,"Book updated successfully ")
    )


})

export const getOneBook = asyncHandler(async(req,res,next)=>{

    const book = await Book.findById(req.params.id)
    if(!book){
        return next(new AppError("Book Not found",400))
    }
    res.status(200).json(
        new ApiResponse(201,book,"Book found successfully ")
    )


})