import { useContext, useState } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

// 2. Create Reducer function
function reducer(state, action) {
    switch(action.type) 
    {
        case "TOGGLE_THEME" :
            return{...state, 
                theme : state.theme === "light" ? "dark" : "light",
            }

        case "SET_USER" :
            return{...state,
                user : action.payload,
            }

        case "SET_LANG" :
            return{...state,
                lang : action.payload,
            }
    }
}

const AppProvider = ({children}) => {
    
// Updated with Reducer
    // 1. Create common state object

    const initialState = {
        theme : "light",
        user : {name: "Guest"},
        lang : "eng"
    }

    // const [theme, setTheme] = useState("light");
    // const [user, setUser] = useState({name: "Guest"})
    // const [lang, setLang] = useState("eng");

    // 3. Create single state object
    const [state, dispatch] = useReducer(reducer, initialState);

    // const toggleTheme = () => {
        // setTheme((theme === "light") ? "dark" : "light");
    // }

    return(                 
             //instead of passing seperate state and its handler or setter we are passing common state object
        <GlobalContext.Provider value={{state, dispatch}}>  //instead of theme, toggleTheme 
              {children}
        </GlobalContext.Provider>
        )

}

export default AppProvider;