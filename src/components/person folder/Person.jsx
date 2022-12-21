import React from 'react';

const Person = ({ fullName, personDelete, personEdit }) => {
    return (
        <div className='card text-white bg-primary mb-3 mt-3 w-25 mx-auto'>
            <div className='card-body text-center'>
                <h3 className='d-block'>{`${fullName}`}</h3>
                <div className='input-group justify-content-center'>
                    <input
                        className='form-control '
                        type="text"
                        placeholder={fullName}
                        onChange={personEdit} />
                    <div className='input-group-prepend'>
                        <button className='btn btn-danger fa fa-trash' onClick={personDelete}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Person;




