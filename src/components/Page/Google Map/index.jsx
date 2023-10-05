import { useEffect, useState } from 'react';
import React from 'react';
import MapComp from './MapComp';
import CityLoc from './CityLoc.json'

function GoogleMap() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        setLocations(CityLoc);
    }, []);
    return (
        <>
            <h1>Locations of Few Cities</h1>
            <MapComp locations={locations} />
        </>
    )
}

export default GoogleMap;