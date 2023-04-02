import React, { createContext, useState, useEffect } from 'react';
import { publishersGet } from './../config';

export const PublishersContext = createContext();

const PublishersContextProvider = ({ children }) => {
    const [doneFetchPublishers, setDoneFetchPublishers] = useState(false);
    const [publishers, setPublishers] = useState(false);

    useEffect(() => {
        const getPublishers = async () => {
            try {
                const response = await fetch(publishersGet())
                const data = await response.json()

                setDoneFetchPublishers(true);
                setPublishers(data.results)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getPublishers()
    }, [])

    return (
        <PublishersContext.Provider value={{ doneFetchPublishers, publishers }}>
            {children}
        </PublishersContext.Provider>
    )

}

export default PublishersContextProvider;