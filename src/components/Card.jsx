import { useState } from 'react'
import '@styles/Card.css'

function Card({ name, id, normalImage, shinyImage }) {
    const [shiny, setShiny] = useState(false)

    const handleShiny = () => {
        setShiny(!shiny)
    }

    return (
        <>
        <div className="card-container">
            <div className="card-image-container">
                <img
                src={shiny ? shinyImage : normalImage}
                alt={name}
                />
            </div>
            <div className="card-text-container">
                <h2>Name: {name}</h2>
                <p><b>ID</b>: {id}</p>
            </div>
            <div className="card-button-container">
                <button onClick={() => handleShiny()}>Shiny</button>
            </div>
        </div>
        </>
    )
}

export default Card;