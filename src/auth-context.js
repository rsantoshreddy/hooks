import React from 'react';

const authCotext = React.createContext({ status: false, login: () => {} });

export default authCotext;
