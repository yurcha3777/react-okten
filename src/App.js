import './Character/character.css'
import {useEffect, useState} from "react";


const Character = () => {
    let [character,setCharacter] = useState([]);
    useEffect(()=>{
         fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => setCharacter(value))

        },[])

    return(
    <div>

        {character.map(character => <Character key={character.id} character={character}/>) }

    </div>
    )

}

export default Character;
