import { useState } from 'react'
import Child1 from './componenets/child1'
import { createContext } from 'react'
import './App.css'

// const UserContext = createContext()
const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({name:"love"})
  const [theme, setTheme] = useState("light")
  return (
      
      <ThemeContext.Provider value={{theme,setTheme}}>
       <div id="container" style={{backgroundColor: theme==="light"?"beige":"black"}}>
        <Child1 />
       </div>

      </ThemeContext.Provider>
       
      




    // <>
    //   <UserContext.Provider value={user}>
    //     <Child1 />
    //   </UserContext.Provider>
    // </>
  )
}

export default App

export { ThemeContext }