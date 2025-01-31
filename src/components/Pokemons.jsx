import { useState, useEffect } from 'react'
import Card from "./Card";

function Pokemons() {
    const [shiny, setShiny] = useState(false)
    const [pokemonData, setPokemonData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((response) => response.json())
            .then((response) => {
                const fetches = response.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
                return Promise.all(fetches)
            })
            .then((res) => {
                setPokemonData(res)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Pokemon Card List</h1>
            {loading && <div>Loading...</div>}
            {error && console.error(error)}
            {console.log(pokemonData)}
            <div className='cardsContainer' >
            {pokemonData.map((element, index) => {
                return (
                        <Card normalImage={element.sprites.front_default} shinyImage={element.sprites.front_shiny} name={element.name} key={index} id={element.id}/>
                )
            })}
            </div>
        </>
    )
}

export default Pokemons