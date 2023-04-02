import { useContext } from "react";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { GenresContext } from '../../context/GenresContext'


const Genres = () => {
    const { doneFetchGenres, genres } = useContext(GenresContext);
    // console.log(genres)
    return (
        <div className="text-4xl text-gray-100">
            {
                doneFetchGenres && genres ?
                    <div>
                        <CollectionCard link="genres" items={genres} />
                    </div>
                    : <div></div>
            }
        </div>
    )
}
export default Genres

