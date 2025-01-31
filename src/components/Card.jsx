import { useState, useEffect } from 'react'
import '@styles/Card.css'

function Card() {
    const [pokemonData, setPokemonData] = useState([])
    const [loading, isLoading] = useState(true)
    const [error, setError] = useState(null)
    const [shiny, setShiny] = useState(false)

    const pokemonApi = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then((response) => response.json())
        .then((response) => {
            setPokemonData(response)
            isLoading(false)
        })
        .catch((error) => {
            setError(error)
            isLoading(false)
        })
    }

    useEffect(() => {
        pokemonApi()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.error(error)
    }

    const handleShiny = () => {
        setShiny(!shiny)
    }

    console.log(pokemonData.results)

    return (
        <>
        <h1>Pokemon Card List</h1>
        <div className="card-container">
            <div className="card-image-container">
                <img
                src={!shiny ? pokemonData[1].sprites.front_default : pokemonData[1].sprites.front_shiny}
                alt={pokemonData[1].name}
                />
            </div>
            <div className="card-text-container">
                <h2>Pokemon Name: {pokemonData[1].name}</h2>
                <p><b>ID</b>: {pokemonData[1].id}</p>
            </div>
            <div className="card-button-container">
                <button onClick={handleShiny}>Shiny</button>
            </div>
        </div>
        </>
    )
}

export default Card;