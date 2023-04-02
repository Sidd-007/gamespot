import { Fragment } from "react";
import parse from "html-react-parser";
import StoreList from "../StoreList/StoreList";
import TextList from "../TextList/TextList";


const Details = ({ gameDetails, gameScreenshots, doneFetchGameScreenshots }) => {

    const { name, background_image_additional, description, released,  platforms, stores, developers, publishers, genres, clip } = gameDetails;
    const truncate = (input) =>
        input?.length > 300 ? `${input.substring(0, 254)}...` : input;

    return (
        <Fragment >
            <div className="mb-24">
                <section class=" font-raleway ">
                    <div class="relative overflow-hidden bg-no-repeat bg-cover" style={{ backgroundPosition: "50%", backgroundImage: `url(${background_image_additional})`, height: "400px" }}></div>
                    <div class="container mx-auto px-6 md:px-12 xl:px-32">
                        <div class="block mb-8 rounded-lg shadow-lg px-8 py-6  md:px-12" style={{ marginTop: "-170px", background: "hsla(0, 0%, 100%, 0.4)", backdropFilter: "blur(40px)" }}>
                            <div className="flex flex-col justify-center items-center">
                                <h1 class="text-4xl font-bold tracking-tight text-gray-900">{name.toUpperCase()}</h1>
                                <span className="text-gray-800 font-bold mt-6">Released : <span className="p-2 ml-2 px-8 bg-gradient-to-r from-[#7B61FF] to-[#AA82FF] font-medium text-white rounded-full  border-transparent  shadow-md transition duration-500">
                                    {released}
                                </span>
                                </span>
                                <span className="p-4 w-2/3 font-medium mt-6">{parse(truncate(description))}</span>
                                <div className="flex mb-4 mt-4">
                                    <span className="font-bold mt-2">
                                        Publishers:
                                    </span>
                                    <div className="ml-2">
                                        <TextList title="Publisher/s" items={publishers} />
                                    </div>
                                </div>
                                <div className="flex items-start mt-4">

                                    <div className="flex mb-4">
                                        <span className="font-bold mt-2">
                                            Genres:
                                        </span>
                                        <div className="ml-2">
                                            <TextList title="Genre/s" items={genres} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mb-4 ml-6 mt-4">
                                    <span className="font-bold mt-2">
                                        Platforms:
                                    </span>
                                    <div className="ml-2">
                                        <TextList title="Platform/s" platforms items={platforms} />
                                    </div>
                                </div>
                                <div className="flex mb-4 ml-6 mt-4">
                                    <span className="font-bold mt-2">
                                        Developers:
                                    </span>
                                    <div className="ml-2">
                                        <TextList title="Developer/s" developers items={developers} />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <StoreList stores={stores} />
                                </div>


                            </div>
                        </div>
                        <div class="container grid grid-cols-3 mb-24 gap-10 mx-auto  m-20">
                            {doneFetchGameScreenshots && gameScreenshots ? (
                                gameScreenshots.results.length ? (
                                    gameScreenshots.results.map((screenshot) => (
                                        <div class="w-full rounded">
                                            <img
                                                src={screenshot.image}
                                                alt={screenshot.id}
                                                className="block object-cover object-center w-full h-full rounded-lg"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div>There are no screenshots available for this title</div>
                                )
                            ) : (
                                <div>

                                </div>
                                // <ProgressBar />
                            )}
                        </div>
                        {/* <Screenshots
                                doneFetchScreenshots={doneFetchGameScreenshots}
                                screenshots={gameScreenshots}
                            /> */}
                        {/* <div className="">
                            {clip ? (
                                <video width="100%" height="350px" controls autoPlay muted>
                                    <source src={clip.clip} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : <div className="mb-24"></div>}
                        </div> */}

                    </div>
                </section >

            </div >

        </Fragment >
    )
}
export default Details