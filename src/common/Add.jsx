import React, { useContext } from 'react';
import SimpleContext from '../context/SimpleContext';

const Add = () => {
    const context = useContext(SimpleContext);
    return (
        // <SimpleContext.Consumer>
        //     {context => (
        <div className='mb-2 p-2'>
            <form className='form-inline justify-content-center' onSubmit={event => event.preventDefault()}>
                <div className='input-group w-25'>
                    <input
                        className='form-control'
                        placeholder='یه اسم بهم بده !'
                        type="text" onChange={context.setPerson}
                        value={context.state.person} />
                    <div className='input-group-append'>
                        <button
                            onClick={context.newPerson}
                            className='btn btn-success  fa fa-plus-circle '></button>
                    </div>
                </div>
            </form>
        </div>
        //    )}
        // </SimpleContext.Consumer>
    );
}

export default Add;