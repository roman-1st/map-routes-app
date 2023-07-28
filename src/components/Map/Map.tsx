import React, {useEffect, useRef} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { Map as LeafletMap } from 'leaflet';
import MapRoutingMachine from "./MapRoutingMachine";
import './Map.sass'

const Map = () => {
    const mapRef = useRef<LeafletMap>(null);
    const { checkRoute} = useTypedSelector(state => state.routes)

    useEffect(() => {
        if (mapRef.current) {
            const bounds = checkRoute && checkRoute.map((marker) => [marker.lat, marker.lng]) as any;
            mapRef.current.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [checkRoute]);

    return (
        <div className="mapWrapper">
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                ref={mapRef}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <MapRoutingMachine />
            </MapContainer>
        </div>
    );
};

export default Map;