/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import { specificPublisherGet, samplePublisherGamesGet } from '../config';

export const PublisherDetailContext = createContext();

const PublisherDetailContextProvider = ({ children }) => {
    const publisher_id = window.location.pathname.split('/')[2];
    const [doneFetchPublisher, setDoneFetchPublisher] = useState(false);
    const [doneFetchPublisherGames, setDoneFetchPublisherGames] = useState(false);
    const [publisher, setPublisher] = useState([]);
    const [publisherGames, setPublisherGames] = useState([]);

    useEffect(() => {
        const getPublisher = async () => {
            try {
                const response = await fetch(specificPublisherGet(publisher_id))
                const data = await response.json()

                setDoneFetchPublisher(true)
                setPublisher(data)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getPublisher()
    }, [])

    useEffect(() => {
        const getPublisherGames = async () => {
            try {
                const response = await fetch(samplePublisherGamesGet(publisher_id))
                const data = await response.json()

                setDoneFetchPublisherGames(true)
                setPublisherGames(data.results)
                // console.log(data);

            } catch (error) {
                console.log(error)
            }
        }

        getPublisherGames()
    }, [])


    return (
        <PublisherDetailContext.Provider value={{ doneFetchPublisher, doneFetchPublisherGames, publisher, publisherGames }}>
            {children}
        </PublisherDetailContext.Provider>
    )
}

export default PublisherDetailContextProvider;