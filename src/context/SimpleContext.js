import React, { createContext } from 'react';

const SimpleContext = createContext({
    //magadire pish farz ra fgt baraye intelisens midim
    state: {},
    personDelete: () => { },
    personEdit: () => { },
    newPerson: () => { },
    setPerson: () => { },
});

export default SimpleContext;