import React from 'react';
import { Pokemon } from "../../shared/types/pokemon"
import { PokemonCard } from "../pokemon-card/pokemon-card";

type PokemonListProps = {
    caughtPokemon: Pokemon[];
};

export const PokemonList = ({ caughtPokemon = [] }: PokemonListProps) => {
    return (
        <div className="flex flex-row flex-wrap py-10 px-20">
            {caughtPokemon.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}