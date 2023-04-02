/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { specificGenreGet, sampleGenreGamesGet } from './../config';

export const GenreDetailContext = createContext();

const GenreDetailContextProvider = ({ children }) => {
    const genre_id = window.location.pathname.split('/')[2];
    const [doneFetchGenre, setdoneFetchGenre] = useState(false);
    const [doneFetchGenreGames, setdoneFetchGenreGames] = useState(false);
    const [genre, setGenre] = useState([]);
    const [genreGames, setGenreGames] = useState([]);

    useEffect(() => {
        const getGenre = async () => {
            try {
                const response = await fetch(specificGenreGet(genre_id))
                const data = await response.json()

                setdoneFetchGenre(true);
                setGenre(data)
                // console.log(data)

            } catch (error) {
                console.log(error)
            }
        }
        getGenre()
    }, [])

    useEffect(() => {
        const getGenreGames = async () => {
            try {
                const response = await fetch(sampleGenreGamesGet(genre_id))
                const data = await response.json()

                setdoneFetchGenreGames(true)
                setGenreGames(data.results)
                // console.log(data)

            } catch (error) {
                console.log(error)
            }
        }
        getGenreGames()
    }, [])

    return (
        <GenreDetailContext.Provider value={{ doneFetchGenre, doneFetchGenreGames, genre, genreGames }}>
            {children}
        </GenreDetailContext.Provider>
    )
}

export default GenreDetailContextProvider;