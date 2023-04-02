import React, { Fragment } from 'react';
import parse from "html-react-parser";

const CollectionInfo = ({ item }) => {
    const { name, description, image_background } = item;
    return (
        <Fragment>
            <div>
                <section class="mb-40">
                    <div class="relative overflow-hidden bg-no-repeat bg-cover bg-top" style={{ backgroundPosition: "50%", backgroundImage: `url(${image_background})`, height: "400px" }}></div>
                    <div class="container mx-auto px-6 md:px-12 xl:px-32">
                        <div class=" text-gray-800">
                            <div class="block rounded-lg shadow-lg px-6 py-4  md:px-12" style={{ marginTop: "-170px", background: "hsla(0, 0%, 100%, 0.4)", backdropFilter: "blur(40px)" }}>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 class="text-3xl font-bold tracking-tight ">{name.toUpperCase()}</h1>
                                    <span className="p-4 w-2/3 mt-8">{typeof description === "string" && parse(description)}</span>
                                    {/* <StoreList stores={stores} /> */}
                                    {/* <TextList title="Publisher/s" items={publishers} /> */}
                                    {/* <TextList title="Genre/s" items={genres} /> */}
                                    {/* <TextList title="Platform/s" platforms items={platforms} /> */}
                                </div>
                            </div>
                            {/* <Screenshots
                                doneFetchScreenshots={doneFetchGameScreenshots}
                                screenshots={gameScreenshots}
                            /> */}
                            <div>
                                {/* {clip ? (
                                    <video width="100%" height="350px" controls autoPlay muted>
                                        <source src={clip.clip} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : null} */}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* <h1 className="text-center">{name}</h1>
            <div>
                <div>
                    <div className="gdetails__description">
                        {typeof description === "string" && parse(description)}
                    </div>
                </div>
                <div>
                    <img src={image_background} alt={name} width="100%" />
                </div>
            </div> */}
        </Fragment>
    );
}

export default CollectionInfo;