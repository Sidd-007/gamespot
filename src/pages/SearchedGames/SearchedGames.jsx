import React, { useState } from 'react';
import Games from '../../components/Games/Games';
import image from './CTA.png'

const SearchedGames = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [gameResults, setGameResults] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = async (e) => {

        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLowerCase()
        console.log(slug)

        setGameResults([])

        const response = await fetch(`https://rawg.io/api/games?key=9c152fa83e8740d39f1185e4c527f823&search=${slug}&page_size=21`)
        const data = await response.json()
        console.log(data);
        setGameResults(data.results)

        setSearchTerm("")
    }

    return (
        <div className="">
            <section class="text-gray-600 body-font">
                <div class="flex mx-36 px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="text-6xl text-gray-300 font-bold">Search The Best </h1>
                        <h1 className="text-4xl text-gray-300 mb-4 font-bold">Game For You</h1>
                        <form className="mt-8" onSubmit={onSubmit}>
                            <div className="flex flex-col sm:flex-row  justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                                <input type="text" value={searchTerm} onChange={handleChange} className="w-full rounded-tl-2xl focus:shadow-[#2cd37f] focus:shadow-sm focus:outline-none  p-2 " placeholder="Search ..."  />
                                <button class="btn inline-block px-6 py-1 border-2 border-[#2cd37f] border-l-gray-100 text-[#ffffff] font-medium text-xs  uppercase  hover:bg-[#1E1E1E]  transition duration-150 ease-in-out rounded-br-2xl" >Search</button>
                            </div>
                        </form>
                    </div>
                    <div class=" w-1/2">
                        <img class="object-cover object-center rounded" alt="hero" src={image} />
                    </div>
                </div>
            </section>

            <Games gameResults={gameResults} />
        </div>
    );
}

export default SearchedGames;


