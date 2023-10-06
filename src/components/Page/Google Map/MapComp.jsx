import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import maphome from '../../../Assets/Icon/maphome.png'

const MapComp = ({ locations }) => {

    const { isLoaded } = useJsApiLoader({
        id: 'City Names',
        googleMapsApiKey: "AIzaSyBXu3_xsd-bCytf8HPen5wW8dlw-Mvg-8U"
    })

    const mapStyles = {
        height: '500px',
        width: '100%',
    };

    const defaultCenter = {
        lat: 20.5937,
        lng: 78.9629,
    };

    return isLoaded ?
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={14}
            center={defaultCenter}
        >
            {locations.map((location, index) => (
                <Marker
                    options={{
                        icon: maphome
                    }}
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                />
            ))}
        </GoogleMap>

        : <></>
};

export default MapComp;
