import React, { Fragment } from "react";

const TextList = ({ title, items, platforms, collection }) => (
    <Fragment>
        <ul className="flex">
            {items && collection
                ? items.map((item) => (
                    <li className="list__item" key={item.id}>
                        {item.name}
                    </li>
                ))
                : items && platforms
                    ? items.map((item) => (
                            <li className="p-2 ml-2 px-8 bg-gradient-to-r from-[#7B61FF] to-[#AA82FF] font-medium text-white rounded-full  border-transparent  shadow-md transition duration-500" key={item.platform.id}>
                                {item.platform.name}
                            </li>
                    ))
                    : items.map((item) => (
                        <li className="p-2 px-8 bg-gradient-to-r from-[#7B61FF] to-[#AA82FF] font-medium text-white rounded-full  border-transparent  shadow-md transition duration-500" key={item.id}>
                            {item.name}
                        </li>
                    ))}
        </ul>
    </Fragment>
);

export default TextList;