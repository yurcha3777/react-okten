import './Character/character.css'
import Character from "./Character/character";

function App() {
    return (
        <div>
        <Character
        id={1}
        name={'Rick Sanchez'}
        status={'Alive'}
        species={'Human'}
        gender={'Male'}
        image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
        alt={'Rick'}
        />
            <Character
        id={2}
        name={'Morty Smith'}
        status={'Alive'}
        species={'Human'}
        gender={'Male'}
        image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
        alt={'Morty'}
        />
            <Character
        id={3}
        name={'Summer Smith'}
        status={'Alive'}
        species={'Human'}
        gender={'Female'}
        image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
        alt={'Summer'}
        />
            <Character
        id={4}
        name={'Beth Smith'}
        status={'Alive'}
        species={'Human'}
        gender={'Female'}
        image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
        alt={'Beth'}
        />
            <Character
        id={5}
        name={'Jerry Smith'}
        status={'Alive'}
        species={'Human'}
        gender={'Male'}
        image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
        alt={'Jerry'}
        />

        </div>
    );
}

export default App;
