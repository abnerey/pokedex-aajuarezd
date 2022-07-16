import { useQuery } from "react-query";
import { POKEDEX_API } from '../../../shared/contants/constants';
import { Pokemon } from "../../../shared/types/pokemon";

const fetchPokemon = (pokemonName: string) => async (): Promise<Pokemon | null> => {
    if (!pokemonName) return null;

    const response = await fetch(`${POKEDEX_API}/${pokemonName}`);

    if (!response.ok) throw new Error('This pokemon does not exist!');
    return response.json();
}

export const usePokemon = (pokemonName: string) => {
    return useQuery(['pokemon', pokemonName], fetchPokemon(pokemonName));
}