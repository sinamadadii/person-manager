import React from 'react';

const Person = ({firstname,age}) => {
    return ( 
        <div>
            <h2>{`${firstname} ${age}`}</h2>
        </div>
     );
}
 
export default Person;




