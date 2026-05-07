import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

const App = () =>
{
  // const {theme, toggleTheme} = useContext(ThemeContext);
  // const {user, setUser} = useContext(UserContext);
  // const {lang, setLang} = useContext(LangContext);

  const {state, dispatch} = useContext(GlobalContext);
  const {theme, user, lang} = state;

  return (
    <div>
      <p>Theme : {theme}</p>
      <p>User : {user.name}</p>
      <p>Lang : {lang}</p>

      <button onClick={toggleTheme}>ThemeChange</button>
      <button onClick={()=> dispatch({type : "TOGGLE_THEME"})}>Name</button>
      <button onClick={()=> dispatch({type : "SET_LANG"})}>Eng</button>
      <button onClick={()=> dispatch({type :"SET_USER"})}>French</button>

    </div>
  )

}

export default App;