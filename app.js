import cookieParser from 'cookie-parser'

import bookRoutes from './src/routes/book.route.js'
import express from 'express'


import 'dotenv/config'

const app = express()

//middlewares and third part built in 
app.use (express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser())




// import all the routes 
app.use('/api/v1/books',bookRoutes)

app.all('*', (_req, res) => {
    res.status(404).send('OOPS!!! 404 Page Not Found');
  });
  

  export default app