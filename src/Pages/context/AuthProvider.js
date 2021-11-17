import React, { createContext } from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import useProducts from '../../hooks/useProducts';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // hooks
  const AllContexts = useFirebase();
  const { displayProducts } = useProducts();
  const Auth = useAuth();


  const data = {
    AllContexts,
    displayProducts,
    Auth
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;