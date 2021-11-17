import React from 'react';
import { Route, Redirect } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const { AllContexts } = useAuth();
    const {user, loading} = AllContexts;
    if (loading) return 'loading';
    return (
        <div>
            <Route {...rest} render = { ({ location }) => user.email ? children : 
             <Redirect to={{ 
                 pathname: '/login',
                 state: {from: location }
              }} ></Redirect> } >
 
            </Route>
        </div>
    );
};

export default PrivateRoute;