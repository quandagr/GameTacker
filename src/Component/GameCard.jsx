import React from 'react'

export const GameCard = ({game, onDelete}) => {

  return (
    <div >

        <div className=" bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-baserounded-md shadow-xs">
    <h5 className="mb-3 text-2xl text-white font-semibold tracking-tight text-heading leading-8">{game.title}</h5>
    <p className="text-white text-body mb-6 font-bold">{game.rating}</p>
    <p className="text-white text-body mb-6 font-bold">{game.genre}</p>
    <button onClick={()=> onDelete(game.id)} className="inline-flex items-center text-white bg-brand bg-gray-800 box-border border border-green-900 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
       Delete
        </button>
</div>

    </div>
    
  )
}
