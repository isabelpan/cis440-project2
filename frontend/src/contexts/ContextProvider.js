import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {

    const [percent, setPercent] = useState(50);
  
    const status = percent === 100 ? "success" : null;
    const color = percent === 100 ? "#03D613" : "#771be7";
    
    const decrease = () => {
      const value =
          Math.max(percent - 10, 0);
      setPercent(value);
  };
  
    const increase = () => {
        const value =
            Math.min(percent + 10, 100);
        setPercent(value);
    };

    return (
        <StateContext.Provider
            value={{
                percent,
                setPercent,
                status,
                color,
                decrease,
                increase
                
        }}>

            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);