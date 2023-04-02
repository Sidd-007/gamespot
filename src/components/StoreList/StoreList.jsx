import React, { Fragment } from 'react';

const StoreList = ({ stores }) => (
    <Fragment>
        {/* <Subtitle text="Get it here" /> */}
        <div className="flex justify-center items-center">
            {stores.map((store) => (
                <div class="border-2 p-2 border-[#2cd37f] ml-4 px-4" key={store.id}>
                    <a
                        href={`https://${store.store.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={require(`./../../assets/images/${store.store.slug}.png`)}
                            alt={store.name}
                            className="shadow rounded-full w-14 h-auto align-middle border-none"
                        />
                    </a>
                </div>
            ))}
        </div>
    </Fragment>
)

export default StoreList;
