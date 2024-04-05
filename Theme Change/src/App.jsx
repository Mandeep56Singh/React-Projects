
import './App.css'
import React ,{ useContext, useState} from 'react';
import Form from './Form.jsx';
import "./switch.css"; // Import the CSS file


export const ThemeContext  = React.createContext(null)
function App() {
const [theme,setTheme] = useState('light')
 const toggleTheme = () => {
  setTheme(t => (t === 'light' ? "dark" : "light"));
 }

 const Switch = () => {
  
   const [isDark, setIsDark] = useState(false);

   const SwitchTheme = () => {
     setIsDark(!isDark);
   };

   return (
     <div className={isDark ? "dark" : "light"} id="switchBtn">
       <input
         type="checkbox"
         className="checkbox"
         id="checkbox"
         checked={isDark}
         onChange={SwitchTheme}
       />
       <label htmlFor="checkbox" className="checkbox-label">
         <i class="bx bxs-moon"></i>
         <i class="bx bxs-sun"></i>
         <span className="ball"></span>
       </label>
     </div>
   );
 };
  return (
   <ThemeContext.Provider value={ {}}>
      <div className='App' id={theme}>
        <Form></Form>
       <Switch></Switch>
      </div>
   </ThemeContext.Provider>
  )
}

export default App
