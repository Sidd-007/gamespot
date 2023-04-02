/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { gameGenresGet } from './../config';

export const GenresContext = createContext();

const GenresContextProvider = ({ children }) => {
    const [doneFetchGenres, setdoneFetchGenres] = useState(false);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            try {
                const response = await fetch(gameGenresGet())
                const data = await response.json()

                setdoneFetchGenres(true);
                setGenres(data.results)
                // console.log(data)

            } catch (error) {
                console.log(error)
            }
        }
        getGenres()
    }, [])
   

    return (
        <GenresContext.Provider value={{ doneFetchGenres, genres }}>
            {children}
        </GenresContext.Provider>
    )
}

export default GenresContextProvider;