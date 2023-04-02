/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { specificPlatformGet, samplePlatformGamesGet } from '../config';

export const PlatformDetailContext = createContext();

const PlatformDetailContextProvider = ({ children }) => {
    const platform_id = window.location.pathname.split('/')[2];
    const [doneFetchPlatform, setDoneFetchPlatform] = useState(false);
    const [doneFetchPlatformGames, setDoneFetchPlatformGames] = useState(false);
    const [platform, setPlatform] = useState([]);
    const [platformGames, setPlatformGames] = useState([]);

    useEffect(() => {
        const getPlatform = async () => {
            try {
                const response = await fetch(specificPlatformGet(platform_id))
                const data = await response.json()

                setDoneFetchPlatform(true)
                setPlatform(data)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getPlatform()
    }, [])

    useEffect(() => {
        const getPlatformGames = async () => {
            try {
                const response = await fetch(samplePlatformGamesGet(platform_id))
                const data = await response.json()

                setDoneFetchPlatformGames(true)
                setPlatformGames(data.results)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getPlatformGames()
    }, [])

    return (
        <PlatformDetailContext.Provider value={{ doneFetchPlatform, doneFetchPlatformGames, platform, platformGames }}>
            {children}
        </PlatformDetailContext.Provider>
    )
}

export default PlatformDetailContextProvider;