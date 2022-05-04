import React from 'react';

const TableBody = ({posts}) => {
        return (
            <tbody className='table'>
                {posts.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))}
            </tbody>
        
    );
    
}
 
export default TableBody;