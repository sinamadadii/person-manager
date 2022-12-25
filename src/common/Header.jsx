import React from 'react';


const Header = ({ personsLength, appTitle }) => {
    return (
        <div className='rtl text-center'>
            <div className='alert alert-info'>
                <h2>{appTitle}</h2>
            </div>
            <div className='alert alert-alert-success'>
                <h3> تعداد اشخاص <span className='badge badge-primary'>{personsLength}</span> نفر میباشد </h3>
            </div>
        </div>
    );
}

export default Header;