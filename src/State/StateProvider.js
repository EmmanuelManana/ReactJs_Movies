import React, { createContext, useContext, useReducer } from "react";

//create context, prepares the date layer.
export const StateContext = createContext();


//create provider, App wrapper to provide the data layer.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pulls data from the data layer.
export const useStateValue = () => useContext(StateContext);
