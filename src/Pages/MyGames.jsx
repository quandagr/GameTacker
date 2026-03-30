import {useState, useEffect} from "react"
import { deleteGame, getGames} from "../Services/gameService"
import { GameCard } from "../Component/GameCard"



export const  MyGames = () => {
const[games,setGames]= useState([])

  useEffect(()=>{
    loadGames()
  },[])

  const loadGames= async () =>{
    const data= await getGames()
    setGames(data)
  }
   const handleDelete = async(id)=>{
    await deleteGame(id)
    setGames(games.filter((game)=>game.id!==id))
   }
  return(
    <div className="bg-[url('/games.webp')] bg-cover bg-center grid grid-cols-4 gap-4">
        {games.map((game)=>(
            <GameCard key={game.id} game={game} onDelete={handleDelete}/>
            
        ))}

    </div>
  )

  }