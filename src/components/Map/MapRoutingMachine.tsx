import React, {useEffect, useState} from 'react';
import {useMap} from "react-leaflet";
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";

const MapRoutingMachine = () => {
    const map = useMap();
    const { checkRoute } = useTypedSelector((state) => state.routes);
    const [ clearMap , setClearMap ] = useState<any>()

    useEffect( () => {
        clearMap && clearMap.remove()

        const newPoints =  checkRoute && L.Routing.control({
            waypoints: [
                L.latLng([checkRoute[0].lat, checkRoute[0].lng]),
                L.latLng([checkRoute[1].lat, checkRoute[1].lng]),
                L.latLng([checkRoute[2].lat, checkRoute[2].lng]),
            ],
            show: false,
            fitSelectedRoutes: false,
        }).addTo(map);

        setClearMap(newPoints)

    }, [checkRoute])

    return null
};

export default MapRoutingMachine;