import React, {useState, useEffect} from "react";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinners";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const navigateBack = () => {
        navigate('/')
    }
    const handleDeleteBook = () => {
        setLoading(true)
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                alert('Book Not Found. Please check console')
                console.log(error)
            })
    }
    return(
        <div className='p-4'>
            <BackButton/>
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading ? <Spinner/>:''}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                Are you sure you want to delete this book?
            </div>
            <div className="flex flex-row justify-center">
                <button className="p-4 bg-red-600 text-white m-8 w-32"
                    onClick={handleDeleteBook}
                >Yes</button>
                <button className="p-4 bg-green-600 text-white m-8 w-32"
                    onClick={navigateBack}    
                >No</button>
            </div>
            
        </div>
    )
}

export default DeleteBooks;