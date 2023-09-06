import express from 'express';
import { Book } from '../models/BookModel.js'

const router = express.Router();

function bookValidation(req, res){
    if(
        !req.body.title ||
        !req.body.author ||
        !req.body.publishYear
    ){
        return res.status(400).send({
            message: 'Send all required fields: title, author, publishYear'
        })
    }
}

// GET
router.get('/', async(req, res) =>{
    try{
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        })
    }catch(error){
        res.status(500).send({message: error.message})
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const { id } = req.params
        const book = await Book.findById(id)
        return res.status(200).json({
            data: book
        })
    }catch(error){
        res.status(500).send({message: error.message})
    }
})

// PUT - update a book
router.put('/:id', async(req, res) => {
    try{
        const {id} = req.params
        bookValidation(req, res)
        const result = await Book.findByIdAndUpdate(id, req.body)

        if(!result)
            return res.status(400).json({message: 'Book Not Found!'})
        else
            return res.status(200).json({message: 'Book Updated'})
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
})

//DELETE - delete a book
router.delete('/:id', async(req, res) => {
    try{
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id)

        if(!result)
            return res.status(400).json({message: 'Book Not Found!'})
        else
            return res.status(200).json({message: 'Book Found and Be Deleted!'})
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
})

//POST - save a book
router.post('/', async(req, res)=>{
    try{
        bookValidation(req, res)
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook)
        console.log(book)
        return res.status(201).send(book);
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({messgae: error.message})
    }
})

export default router;