import './App.css'
import {Navbar} from './Component/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddGamePage } from './Pages/AddGamePage'
import { HomePage } from './Pages/HomePage'
import { MyGames } from './Pages/MyGames'

function App() {


  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path = "/" element= {<HomePage/>}/>
    <Route path = "/AddGamePage" element= {<AddGamePage/>}/>
    <Route path = "/MyGames" element ={<MyGames/>}/>
    </Routes>
     </BrowserRouter>
   
  )
}

export default App

