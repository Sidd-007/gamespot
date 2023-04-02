import React, { Fragment, useContext } from 'react';
import { PlatformDetailContext } from "../../context/PlatformDetailContext";
import CollectionInfo from '../../components/CollectionInfo/CollectionInfo';
import Game from '../../components/Game/Game'


const PlatformDetail = () => {
    const { doneFetchPlatform, doneFetchPlatformGames, platform, platformGames } = useContext(PlatformDetailContext);
    return (
        <Fragment>
            {doneFetchPlatform && doneFetchPlatformGames ? (
                <Fragment>
                    <CollectionInfo item={platform} />
                    <div container spacing={3}>
                        <Game games={platformGames} />
                    </div>
                </Fragment>
            ) : (
                <div></div>
            )}
        </Fragment>
    );
}

export default PlatformDetail;