import React from 'react';
import Thead from "./THead/Thead";
import Tbody from "./Tbody/Tbody";
import './Table.sass'

const Table = () => {


    return (
        <div className="tableContainer">
            <table className="table">
                <Thead />
                <Tbody />
            </table>
        </div>
    );
};

export default Table;