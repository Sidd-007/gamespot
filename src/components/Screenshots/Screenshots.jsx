import React, { Fragment } from "react";

const Screenshots = ({ doneFetchScreenshots, screenshots }) => {
    return (
        <Fragment>
            <div class="flex flex-wrap w-1/3">

                {doneFetchScreenshots && screenshots ? (
                    screenshots.results.length ? (
                        screenshots.results.map((screenshot) => (
                            <div
                                key={screenshot.id}
                                className="w-full p-1 md:p-2"
                            >
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
                    <div></div>
                    // <ProgressBar />
                )}
            </div>
        </Fragment>
    );
};

export default Screenshots;