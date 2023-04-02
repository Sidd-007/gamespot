/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { gameDetailsGet, gameScreenshotsGet } from './../config';

export const GameDetailsContext = createContext();

const GameDetailsContextProvider = ({ children }) => {

    const game_id = window.location.pathname.split('/')[3];

    const [doneFetchGameDetails, setdoneFetchGameDetails] = useState(false);
    const [doneFetchGameScreenshots, setdoneFetchGameScreenshots] = useState(false);
    const [gameDetails, setGameDetails] = useState();
    const [gameScreenshots, setGameScreenshots] = useState();

    
    useEffect(() => {
        const getGameDetails = async () => {
            try {
                const response = await fetch(gameDetailsGet(game_id))
                const data = await response.json()

                setdoneFetchGameDetails(true);
                setGameDetails(data)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getGameDetails()
    }, [])
    
    useEffect(() => {
        const getGameScreenshots = async () => {
            try {
                const response = await fetch(gameScreenshotsGet(game_id))
                const data = await response.json()

                setdoneFetchGameScreenshots(true);
                setGameScreenshots(data)
                console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getGameScreenshots()
    }, [])

    return (
        <GameDetailsContext.Provider value={{ doneFetchGameDetails, gameDetails, doneFetchGameScreenshots, gameScreenshots }}>
            {children}
        </GameDetailsContext.Provider>
    )
}

export default GameDetailsContextProvider;