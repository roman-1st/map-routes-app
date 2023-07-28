import React from 'react';
import Map from "./Map/Map";
import "./index.sass"
import Table from "./Table/Table";

const Index = () => {
    return (
        <div className="wrapper">
            <Table />
            <Map />
        </div>
    );
};

export default Index;