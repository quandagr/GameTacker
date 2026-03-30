const url = import.meta.env.VITE_SUPABASEURL
const apikey = import.meta.env.VITE_SUPABASEKEY

export async function getGames() {
    const response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "apikey":apikey

        }
    })
    const data = await response.json()
    return data

}
export async function deleteGame(gameId) {
    const response = await fetch(`${url}?id=eq.${gameId}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "apikey":apikey
        }
    })
    if(!response.ok) throw new Error("fail to delete game")
        return true
}
export async function addGame(gameData) {
    const response = await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "apikey":apikey,
        },

        body: JSON.stringify(gameData)

        });
        
        // return await response.json();
    
    
}
