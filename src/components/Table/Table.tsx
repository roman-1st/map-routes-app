import React, {useState} from 'react';
import { Table } from 'antd';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './Table.sass'
import {setCheckRoute} from "../../redux/reducer/routesSlice";
import {useDispatch} from "react-redux";


const MyTable = () => {
    const { routes } = useTypedSelector((state) => state.routes);
    const dispatch = useDispatch()
    const [selectedRouteKey, setSelectedRouteKey] = useState<number | null>(null);
    const columns = [
        { id: 1, title: '№', dataIndex: 'id', key: 'id' },
        { id: 1, title: 'Точка старта', dataIndex: 'cord1', key: 'cord1' },
        { id: 2, title: 'Точка остановки', dataIndex: 'cord2', key: 'cord2' },
        { id: 3, title: 'Конечная точка', dataIndex: 'cord3', key: 'cord3' },
    ];
    const data: any[] = [];

    routes.forEach((route, index) => {
        const routeData: any = {
            key: index + 1,
            id: index + 1,
            route: route,
        };
        route.forEach((point, pointIndex) => {
            routeData[`cord${pointIndex + 1}`] = `${point.lat} ${point.lng}`;
        });
        data.push(routeData);
    });

    const isRowSelected = (record: any) => {
        return record.key === selectedRouteKey;
    };

    const generateRowClassName = (record: any) => {
        return `routesRow ${isRowSelected(record) ? " activeRow" : ""}`;
    };
    const handleRowClick = (record: any) => {
        setSelectedRouteKey(record.key);
        console.log(record)
    };

    return (
        <div className="tableContainer">
            <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                rowClassName={generateRowClassName}
                onRow={(record) => ({
                    onClick: () => {
                        handleRowClick(record)
                        dispatch(setCheckRoute(record.route))
                    }
                })}
            />
        </div>

    );
};

export default MyTable;