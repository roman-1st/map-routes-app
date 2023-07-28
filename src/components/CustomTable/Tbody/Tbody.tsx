import React, {useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setCheckRoute} from "../../../redux/reducer/routesSlice";
import './Tbody.sass'


const Tbody = () => {
    const [isCheckRoute, setIsCheckRoute] = useState<null | number>(null)
    const {routes , checkRoute} = useTypedSelector( state => state.routes)
    const dispatch = useDispatch()

    return (
        <tbody>
            {routes.map((route, index) => (
                <tr
                    className={"tr-body" + (isCheckRoute === index ? " tr-body-active" : "")}
                    key={index}>
                    <td>{index + 1}</td>
                    {route.map((el, elIndex) => (
                        <td
                            onClick={() => {
                                setIsCheckRoute(index)
                                dispatch(setCheckRoute(route))
                            }}
                            key={elIndex}>
                            {el.lat}, {el.lng}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default Tbody;