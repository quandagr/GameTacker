// import React from 'react'
import{GameForm} from "../Component/GameForm"
import {useNavigate} from 'react-router-dom'
import { addGame } from "../Services/gameService";

export const AddGamePage = () => {
    const navigate =useNavigate();

    const handleAddGame= async(newGame) => {
      try{
        await addGame(newGame);
        navigate("/");
      }catch(error){
        console.error("Error saving game:",error);
        alert("Failed to save game. Check your Supabase connection!");
      }
    };
    

  return (
     
      <div>
        <h1 className="flex justify center font bold"></h1>
        <GameForm onSubmit={handleAddGame}/>
    </div>
  )
}
