import React, { createContext } from 'react';

const SimpleContext = createContext({
    //magadire pish farz ra fgt baraye intelisens midim
    persons: [],
    person: '',
    personDelete: () => { },
    personEdit: () => { },
    newPerson: () => { },
    setPerson: () => { },
});

export default SimpleContext;