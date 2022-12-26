import React, { useContext } from 'react';
import SimpleContext from './../context/SimpleContext';

const Header = ({ appTitle }) => {
    const context = useContext(SimpleContext);
    return (
        // <SimpleContext.Consumer>
        /* u can rename context to anything in below */
        /* {context => ( */
        <div className='rtl text-center'>
            <div className='alert alert-info'>
                <h2>{appTitle}</h2>
            </div>
            <div className='alert alert-alert-success'>
                <h3> تعداد مخاطبین <span className='badge badge-primary'>{context.persons.length}</span> نفر میباشد </h3>
            </div>
        </div>
        /* )} */
        /* </SimpleContext.Consumer> */
    );
}

export default Header;