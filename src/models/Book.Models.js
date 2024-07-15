import { Schema,model } from "mongoose"

const bookSchema = new Schema(
{
 fullName:{
    type:String,
    requrired:[true,'BookName is required'],
    trim:true,// remove unneccesary column
 },
 authorName:{
    type:String,
    required:[true,'Email is required'],
    trim:true,
 },
 bookDescription:{
    type:String,
    lowercase:true,
 },
 pages:{
    type:Number,
    required:true,
 },
 publishedDate:{
    type:String,
    required:true,
 }

}
)

const Book = model('Book',bookSchema)
export default Book;