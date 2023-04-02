import { Link } from "react-router-dom";

const Game = ({ games }) => {
    // console.table(games.slice(0, 1))

    return (
        <div class="container relative flex-grow w-full py-4 sm:py-16 mx-auto px-0 ">

            <div class="mx-auto w-full md:w-4/5 px-4 ">
                <div
                    id="scrollContainer"
                    class="flex scrollbar  flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                >
                    {games.map((game) => {
                        const { id, background_image, name, rating, released, } = game;
                        return (
                            <div
                                class="flex-none w-[300px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 transform  duration-300 mb-6 hover:shadow-xl  cursor-pointer mr-8 md:pb-4 rounded-lg"
                            >
                                <Link to={`/games/details/${id}`}>
                                    <div class="aspect-w-16 aspect-h-9">
                                        <img
                                            class="object-cover shadow-md hover:shadow-xl rounded-lg"
                                            src={background_image}
                                            alt=""
                                        />
                                    </div>
                                    <div class="px-4 py-2">
                                        <span class="font-semibold text-gray-300 text-xl">
                                            {name}
                                        </span>
                                        <div  className="flex flex-1  justify-between">

                                            <span class="text-xl font-light leading-relaxed text-gray-400 mt-5">
                                                {released}
                                            </span>
                                            <div className="flex items-center p-3">
                                                <div>

                                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.74028 3.06518L5.96864 2.66242L4.72914 0.150921C4.67949 0.0503673 4.58291 0 4.48633 0L4.48669 7.22472L6.96533 8.52795C7.16409 8.6323 7.39607 8.46368 7.35816 8.24254L6.88482 5.48191L8.8903 3.52697C9.05115 3.37027 8.96233 3.0975 8.74028 3.06518V3.06518Z" fill="#FFB820" />
                                                        <path d="M6.30258 5.29289C6.30258 5.29289 6.73007 7.78472 6.73151 7.79302C6.73007 7.79284 4.52095 7.23339 4.48647 7.22472C4.48611 7.22454 2.0071 8.52795 2.0071 8.52795C1.80834 8.6323 1.57636 8.46368 1.61427 8.24254L2.08761 5.48191L0.0821319 3.52697C-0.0787184 3.37027 0.0101013 3.0975 0.23215 3.06518L3.00379 2.66242L4.2433 0.150921C4.29294 0.0503673 4.38952 0 4.48611 0L5.60881 3.15743L8.11923 3.52228L6.30258 5.29289Z" fill="#FFD06A" />
                                                    </svg>
                                                </div>

                                                <div className="text-gray-300 ml-1">
                                                    {rating}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            </div>

                        );
                    })}

                </div>
            </div>
        </div>
    )
}
export default Game