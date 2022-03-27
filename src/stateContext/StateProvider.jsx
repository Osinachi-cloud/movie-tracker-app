import React,{ createContext, useContext, useReducer, useState } from 'react';

export const StateContext= createContext();

export  const StateProvider=({ reducer, initialState, children })=>{

    return(
<StateContext.Provider value={useReducer(reducer,initialState)}> 
    {children}  
</StateContext.Provider>
)
};
export const useStateValue = () =>useContext(StateContext);





export const Context = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;