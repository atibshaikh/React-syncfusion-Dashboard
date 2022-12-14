import React, {createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState('#03C9D7');


    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        console.log(clicked);
        setIsClicked({ ...initialState, [clicked]:true});
    }
    return (
        <StateContext.Provider 
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const  useStateContext = () => useContext(StateContext);