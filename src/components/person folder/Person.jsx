import React from 'react';

const Person = ({ fullName, personDelete, personEdit }) => {
    return (
        <div className='card text-white bg-info mb-3 mt-3 w-25 mx-auto'>
            <div className='card'>
                <h3>{`${fullName}`}</h3>
                <button onClick={personDelete}>حذف</button>
                <input type="text" placeholder={fullName} onChange={personEdit} />
            </div>
        </div>
    );
}

export default Person;




