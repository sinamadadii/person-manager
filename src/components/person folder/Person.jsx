import React from 'react';

const Person = ({ fullName, age, personDelete, personEdit }) => {
    return (
        <div>
            <h2>{`${fullName}`}</h2>
            <button onClick={personDelete}>حذف</button>
            <input type="text" placeholder={fullName} onChange={personEdit} />
        </div>
    );
}

export default Person;




