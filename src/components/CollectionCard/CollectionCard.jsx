import { Link } from "react-router-dom";

const CollectionCard = ({ items, link }) => {
    return (
        <div className="container  p-10 md:p-44  grid lg:grid-cols-2 2xl:grid-cols-2 grid-cols-1 gap-y-5 transform duration-500">
            {items.map((item) => {
                const { id, name, image_background } = item;
                return (
                    <div className='flex justify-center items-center'>
                        <div key={id}>
                            <div
                                class="flex-none w-[300px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 transform  duration-300 mb-6 hover:shadow-xl  cursor-pointer mr-8 md:pb-4 rounded-lg"
                            >
                                <Link  to={`/${link}/${id}`} className="flex jus items-center flex-col">
                                    <div class="aspect-w-16 aspect-h-9">
                                        <img
                                            class="object-cover shadow-md hover:shadow-xl rounded-lg"
                                            src={image_background}
                                            alt=""
                                        />
                                    </div>
                                    <div className="">

                                        <div class="px-4 py-2 ">
                                            <span class="font-semibold text-gray-300 text-xl">
                                                {name}
                                            </span>

                                        </div>
                                    </div>

                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CollectionCard;
