import React, { Fragment, useContext } from 'react';
import { PublishersContext } from './../../context/PublishersContext';

import CollectionCard from '../../components/CollectionCard/CollectionCard'

const Publishers = () => {
    const { doneFetchPublishers, publishers } = useContext(PublishersContext);
    return (
        <Fragment>
            <h1 className="text-center">Publishers</h1>
            {
                doneFetchPublishers && publishers ?
                    <div container spacing={2}>
                        <CollectionCard link="publishers" items={publishers} />
                    </div>
                    : <div></div>
            }
        </Fragment>
    );
}

export default Publishers;
