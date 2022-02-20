import React from 'react';
import { Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

// export default function PrivateRoutes({component: Component, ...rest}) {
//     const {currentUser} = useAuth();
//   return (
//   <Route
//   {...rest}
//   render={props=>{
//     return currentUser ? <Component {...props}/> : <Navigate replace to="/login" />
//   }}>

//   </Route>);
// }

export default function PrivateRoutes({children}) {
    const {currentUser} = useAuth();
  return currentUser ? children : <Navigate replace to="/login" />
}
