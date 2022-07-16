import React from "react";
import { Pokemon } from "../../shared/types/pokemon";

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="card w-[275px] shadow-xl m-5">
        <figure className="bg-white h-[185px]">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </figure>
        <div className="card-body bg-neutral">
            <h2 className="card-title text-white uppercase">
            {pokemon.name}
                <div className="badge badge-secondary">{pokemon.id}</div>
            </h2>
            <div className="card-actions justify-start">
                <div className="badge badge-outline">Weight: {pokemon.weight}</div>
                <div className="badge badge-outline">Height: {pokemon.height}</div>
            </div>
        </div>
    </div>
  );
};
