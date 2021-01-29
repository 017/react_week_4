import React from 'react';

const authContext = React.createContext({
  isAuthenticated: false,
});

export default authContext;