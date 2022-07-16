import React, { useRef, useState, useEffect } from 'react';
// using import type for better typing bundling
import type { Pokemon } from '../../shared/types/pokemon';
import { usePokemon } from './hooks/usePokemon';

type SearchBarProps = {
    onCatchPokemon: (pokemon: Pokemon) => void;
}

export const SearchBar = ({ onCatchPokemon }: SearchBarProps) => {
    const [ searchPokemon, setSearchPokemon ] = useState('');
    const { data: newPokemon, error } = usePokemon(searchPokemon);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (newPokemon) {
            onCatchPokemon(newPokemon);
            // Cleaning after successful search
            setSearchPokemon('');
            if (inputRef?.current?.value) inputRef.current.value = '';
        }
    }, [ newPokemon, onCatchPokemon ]);

    const onClickCatch = () => {
        if (inputRef?.current?.value) {
            setSearchPokemon(inputRef.current.value);
        }
    }

    console.info(error);

    return (
        <div className='flex w-full justify-center'>
            <input
                type="text"
                ref={inputRef}
                placeholder="Let's find your pokemon!"
                className="input input-bordered input-primary w-2/5"
            />
            <button className="btn btn-accent ml-5" onClick={onClickCatch}>Catch it!</button>
        </div>
    );
}
