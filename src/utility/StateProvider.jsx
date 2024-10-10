import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();   // creates a Context object called StateContext. This object is where our state will be stored and shared with any component that needs access to it.

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// StateProvider: This is a functional component that acts as a wrapper for our state. It will use the Context API to provide state to its children components.
// initialState: This is the initial state of your context.
// reducer: The reducer function that will define how your state should be updated based on dispatched actions.
// children: This represents any child components that this provider will wrap around.
// useReducer(reducer, initialState): This sets up our state management using the useReducer hook, 
// which takes in a reducer function and an initial state and returns the current state and a dispatch function.

export const useStateProvider = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useStateProvider must be used within a StateProvider");
  }
  return context;
};

// createContext: This function creates a Context object. When React renders a component that subscribes
//  to this Context object, it will read the current context value from the closest matching Provider 
// above it in the tree.
// useContext: This hook lets you subscribe to React Context without introducing nesting.
// useReducer: This hook is usually preferable to useState when you have complex state logic that 
// involves multiple sub-values or when the next state depends on the previous one.
