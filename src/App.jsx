import {  useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Darkmode from './componets/Darkmode.jsx'
import Box from './componets/Box.jsx'
import Header from'./componets/Header.jsx'
import Home from './Home.jsx'



function App() {
  const [checker, setCheck] = useState(false);
  const styles = checker ? { color: 'white', backgroundColor: 'grey' } : {color: 'black', backgroundColor: 'white'};
   function check(){
    setCheck(!checker);
   }
   
  const router = createBrowserRouter([
    {path:"/",
  element:<Home/>},
    {
      path: "/Header",
      element: <Header toggle={check} style={styles}/>,
     children : [
    {
      path: "Dark",
      element: <Darkmode style={styles}/>,
    },
    {
      path: "Box",
      element: <Box style={styles}/>,
    },
  ]
},
{
  path: "/Box",
  element: <Box style={styles}/>,
},
   
  ]);



  
  return (
    <div className='app' style={styles}>
   
        <div className="routes">
      <RouterProvider router={router} />
        
      </div>
    </div>
  )
}

export default App
