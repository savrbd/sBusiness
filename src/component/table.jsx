import React from 'react';
import TableBody from './tableBody';
import TableHeader from "./tableHeader"

const Table = ({ posts, onSort, sortBy }) => {
    return (
        <table className="table table-bordered ">
            <TableHeader onSort={onSort} sortBy={sortBy}/>
            <TableBody posts={posts}/>
        </table>
    );
}
 
export default Table;