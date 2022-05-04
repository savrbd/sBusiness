import React from 'react';

const TableHeader = ({ onSort,sortBy }) => {
    const showIcons = (item) => {
        if (sortBy.iter === item){
            if(sortBy.order === "asc"){
              return(<i className="bi bi-chevron-down"></i>)  
            } else{
                return(<i className="bi bi-chevron-up"></i>) 
            }
            }
           
       
    }
    return (
        <thead className="bg-secondary text-white">
                <tr>
                    <th className='col-1' onClick={()=>onSort('id')} scope="col">ID {showIcons("id")}</th>
                    <th className='col-4' onClick={()=>onSort('title')} scope="col">Заголовок {showIcons("title")}</th>
                    <th className='col-7' onClick={()=>onSort('body')} scope="col">Описание {showIcons("body")}</th>
                </tr>
        </thead>
    );
}
 
export default TableHeader;