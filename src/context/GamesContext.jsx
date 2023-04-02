/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { popularGamesGet, upcomingGamesGet, newGamesGet, searchGameGet } from './../config';

export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {

    const [doneFetchPopularGames, setdoneFetchPopularGames] = useState(false);
    const [doneFetchUpcomingGames, setdoneFetchUpcomingGames] = useState(false);
    const [doneFetchNewGames, setdoneFetchNewGames] = useState(false);
    const [doneFetchSearchedGames, setdoneFetchSearchedGames] = useState(false);
    const [popularGames, setPopularGames] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [newGames, setNewGames] = useState([]);
    const [currentQGame, setCurrentQGame] = useState('');
    const [searchedGames, setSearchedGames] = useState([]);



    useEffect(() => {
        const getPopularGames = async () => {
            try {
                const response = await fetch(popularGamesGet())
                const data = await response.json()

                setdoneFetchPopularGames(true);
                setdoneFetchSearchedGames(false);
                setPopularGames(data.results)
                // console.log(data.results)

            } catch (error) {
                console.log(error)
            }
        }

        getPopularGames()
    }, [])

    useEffect(() => {
        const getUpcomingGames = async () => {
            try {
                const response = await fetch(upcomingGamesGet())
                const data = await response.json()

                setdoneFetchUpcomingGames(true);
                setdoneFetchSearchedGames(false);
                setUpcomingGames(data.results)
                // console.log(data.results)

            } catch (error) {
                console.log(error)
            }
        }

        getUpcomingGames()
    }, [])


    useEffect(() => {
        const getNewGames = async () => {
            try {
                const response = await fetch(newGamesGet())
                const data = await response.json()

                setdoneFetchNewGames(true);
                setdoneFetchSearchedGames(false);
                setNewGames(data.results)
                // console.log(data.results)

            } catch (error) {
                console.log(error)
            }
        }
        getNewGames()
    }, [])

    const getSearchedGames = async (q_game) => {
        try {
            const response = await fetch(searchGameGet(q_game))
            const data = await response.json()

            setdoneFetchSearchedGames(true);
            setSearchedGames(data.results)
            // console.log(data.results)

        } catch (error) {
            console.log(error)
        }
    }

    const validateQGame = (e) => {
        let q_game = e.target.value;
        console.log(q_game);
        if (e.type === 'keypress' && e.key === 'Enter') {
            if (q_game && q_game !== currentQGame) {
                setCurrentQGame(q_game);
                setdoneFetchPopularGames(false);
                setdoneFetchUpcomingGames(false);
                setdoneFetchNewGames(false);
                getSearchedGames(q_game);
            }
        }
    }

    return (
        <GamesContext.Provider value={{ doneFetchPopularGames, doneFetchUpcomingGames, doneFetchNewGames, doneFetchSearchedGames, popularGames, upcomingGames, newGames, searchedGames, validateQGame }}>
            {children}
        </GamesContext.Provider>
    )
}

export default GamesContextProvider;