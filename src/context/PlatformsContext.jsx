import React, { createContext, useState, useEffect } from 'react';
import { gamePlatformsGet } from './../config';

export const PlatformsContext = createContext();

const PlatformsContextProvider = ({ children }) => {
    const [doneFetchPlatforms, setDoneFetchPlatforms] = useState(false);
    const [platforms, setPlatforms] = useState(false);


    useEffect(() => {
        const getPlatforms = async () => {
            try {
                const response = await fetch(gamePlatformsGet())
                const data = await response.json()

                setDoneFetchPlatforms(true);
                setPlatforms(data.results)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getPlatforms()
    }, [])

    return (
        <PlatformsContext.Provider value={{ doneFetchPlatforms, platforms }}>
            {children}
        </PlatformsContext.Provider>
    )

}

export default PlatformsContextProvider;