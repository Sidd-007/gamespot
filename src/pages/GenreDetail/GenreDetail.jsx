import React, { Fragment, useContext } from "react";
import CollectionInfo from "../../components/CollectionInfo/CollectionInfo";
import { GenreDetailContext } from "../../context/GenreDetailContext";
import Game from '../../components/Game/Game'

const GenreDetail = () => {
    const { doneFetchGenre, doneFetchGenreGames, genre, genreGames } = useContext(
        GenreDetailContext
    );
    return (
        <Fragment>
            {doneFetchGenre && doneFetchGenreGames ? (
                <Fragment>
                    <CollectionInfo item={genre} />
                    <div>
                        <Game games={genreGames} />
                    </div>
                </Fragment>
            ) : (
                <div></div>
            )}
        </Fragment>
    );
};

export default GenreDetail;
