import React, { Fragment, useContext } from 'react';
import { PlatformsContext } from '../../context/PlatformsContext';
import CollectionCard from '../../components/CollectionCard/CollectionCard'

const Platforms = () => {
    const { doneFetchPlatforms, platforms } = useContext(PlatformsContext);
    return (
        <Fragment>
            {/* <h1 className="text-center">Platforms</h1> */}
            {
                doneFetchPlatforms && platforms ?
                    <div className='flex justify-center items-center'>
                        <CollectionCard link="platforms" items={platforms} />
                    </div>
                    : <div></div>
            }
        </Fragment>
    );
}

export default Platforms;
