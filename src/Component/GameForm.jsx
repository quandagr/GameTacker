import React from 'react'
import {useState} from 'react'

export const GameForm = ({onSubmit}) => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState(1)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({title,genre,rating:parseInt(rating)});
    };

  return (
    <div>
         <h1 className="text-center font-bold text-4xl">Entry Form</h1>
    <form  onSubmit ={handleSubmit} className="max-w-md mx-auto m-15">
        <div className="mb-5">
            <label className="block text-sm font-md">Enter Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"id="title" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"/>
        </div>
         <div className=" mb-5">
            <label className="block text-sm font-md">Enter Genre</label>
            <input value={genre} onChange= {(e) => setGenre(e.target.value)} type="text"id="genre" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"/>
        </div>
          <div className=" mb-5">
            <label className="block text-sm font-md">Enter Rating</label>
            <input value={rating} onChange= {(e)=> setRating(e.target.value)} type="number"id="rating" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"/>
        </div>
        
        <button  type="submit" className="bg-green-600/50 rounded- p-5">Submit</button>
        </form>
    </div>
  )
}
