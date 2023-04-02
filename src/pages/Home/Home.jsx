
import React, { useContext } from "react";
import { GamesContext } from "./../../context/GamesContext";
import Game from "../../components/Game/Game"
import StoresSVG from "../../components/StoresSVG/StoresSVG";
import image from "./back2.png"
import man from "./man.png"
import woman from "./woman.png"
import SearchedGames from "../SearchedGames/SearchedGames";
import Stars from "./Stars";


function Home() {

    const {
        popularGames,
    } = useContext(GamesContext);
    return (
        <div className="font-raleway  ">
            <section className="w-full h-auto bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image})` }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6  ">
                    <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 ">

                        <div class="text-center mb-36">

                            <span class="mx-2 px-4 text-white font-medium text-[13px] ">GAMEWORLD DISTRIBUTORS</span>

                            <h1 class="text-gray-100 text-5xl md:text-5xl lg:text-5xl 2xl:text-6xl xl:text-6xl font-bold mt-10" >Connecting <span className="text-[#01F28D]">Players</span> <span className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl xl:text-6xl">
                                &
                            </span>
                            </h1>
                            <h2 class="text-gray-200 text-4xl md:text-5xl lg:text-5xl xl:text-6xl  2xl:text-6xl font-bold">Games in an Immersive enviroment</h2>
                            <div class="inline-flex mt-10">
                                <button class="p-2 px-8 my-5 mx-2 bg-gradient-to-r to-[#7B61FF] from-[#AA82FF] font-medium text-white rounded-full  border-transparent  shadow-md transition duration-500 text-base">Explore Games</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StoresSVG />

            <div className="mt-36">

                <div className="flex items-center justify-center text-4xl font-semibold ">

                    <fieldset class="border-t  border-[#F68E5F]">
                        <legend class="mx-2 px-4 text-[#F68E5F] font-medium " data-aos="zoom-in">Popular Games</legend>
                    </fieldset>
                </div>
                <div class=" min-h-screen flex items-center justify-center px-16 ">
                    <div class="relative w-full">
                        <div className="w-1/2">

                            <div class="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-[#7B61FF] to-[#AA82FF] rounded-full mix-blend-normal filter blur-2xl opacity-30 animate-blob"></div>
                            <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-normal filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

                        </div>
                        <Game games={popularGames} />
                    </div>
                </div>
            </div>
            <div className="" data-aos="fade-up">

                <div className="relative mt-32 mx-auto flex sm:flex-row flex-col justify-center items-center">
                    <span className="text-4xl text-white font-bold">
                        What our Customers
                    </span>
                    <span className="text-4xl text-white font-bold ml-1" data-aos="fade-up" data-aos-delay="200">
                        are saying
                    </span>
                </div>

                <div className="mx-auto p-20 flex justify-center items-center">
                    <section class="container md:ml-20 relative transform duration-500" >
                        <article class="flex rounded-xl h-60 flex-wrap relative md:flex-nowrap bg-[#1E1E1E]  shadow-lg max-w-xl " data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div class="p-6 ">
                                <Stars />
                                <p class="text-sm text-gray-200 mt-4">
                                    My neighbor has one of these. She works as a
                                </p>
                                <p class="text-sm text-gray-200 ">
                                    gardener and she says its really awesome.
                                </p>
                                <p className="text-lg text-white mt-12 font-semibold">
                                    Charles Boyle
                                </p>
                                <p className="text-[13px] text-[#2CD37F] font-medium ">
                                    Graphic Designer
                                </p>

                            </div>
                            <img class="absolute right-2 -top-[39px] h-[280px] " src={man} alt="" />
                        </article>
                    </section>
                    <section class="container  relative transform duration-500">
                        <article class="flex rounded-xl flex-wrap h-60 relative md:flex-nowrap bg-[#1E1E1E]  shadow-lg max-w-xl " data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                            <div class="p-6 ">
                                <Stars />
                                <p class="text-sm text-gray-200 mt-4">
                                    One of my hobbies is gaming.

                                </p>
                                <p class="text-sm text-gray-200 ">
                                    and when i'm hiking this works
                                    great.
                                </p>
                                <p className="text-lg text-white mt-12 font-semibold">
                                    Marry Smith
                                </p>
                                <p className="text-[13px] text-[#2CD37F] font-medium ">
                                    3D Animator
                                </p>

                            </div>
                            <img class="absolute right-2 -top-[39px] h-[280px]" src={woman} alt="" />
                        </article>
                    </section>
                </div>
            </div>

            {/* <div className="w-2/3"> */}
            <SearchedGames />
            {/* </div> */}

        </div>
    )

}
export default Home