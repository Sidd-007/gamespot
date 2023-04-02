import React, { Fragment, useContext } from 'react';
import { PublisherDetailContext } from "../../context/PublisherDetailContext";
import CollectionInfo from '../../components/CollectionInfo/CollectionInfo';
import Game from '../../components/Game/Game'

const PublisherDetail = () => {
    const { doneFetchPublisher, doneFetchPublisherGames, publisher, publisherGames } = useContext(PublisherDetailContext);
    return (
        <Fragment>
            {doneFetchPublisher && doneFetchPublisherGames ? (
                <Fragment>
                    <CollectionInfo item={publisher} />
                    <div container spacing={3}>
                        <Game games={publisherGames} />
                    </div>
                </Fragment>
            ) : (
                <div></div>
            )}
        </Fragment>
    );
}

export default PublisherDetail;