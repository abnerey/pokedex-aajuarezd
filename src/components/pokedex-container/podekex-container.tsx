import React from 'react';
// Separate imports gives better tree shaking
import { useState } from 'react';
import { Pokemon } from '../../shared/types/pokemon';
import { PokemonList } from '../../ui/pokemon-list/pokemon-list';
import { SearchBar } from '../search-bar/search-bar';

// import logo from '../../pokemon_logo.png';

export const PokedexContainer = () => {
    const [ caughtPokemonList, setCaughtPokemonList ] = useState<Pokemon[]>([]);

    const onCatchPokemon = (newPokemon: Pokemon) => {
        setCaughtPokemonList(list => [...list, newPokemon]);
    };

    return (
        <div className='w-full flex flex-col'>
            <div className='flex justify-center my-10 -translate-x-3'>
                <img 
                    className="w-[515px] h-[200px]"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
                    alt="pokemonLogo"
                />
            </div>
            <div className='w-full'>
                <SearchBar onCatchPokemon={onCatchPokemon} />
            </div>
            <div className='w-full h-full'>
                <PokemonList caughtPokemon={caughtPokemonList} />
            </div>
        </div>
    )
}