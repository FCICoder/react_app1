import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Notfound from './Components/Notfound/Notfound'
import '.././node_modules/@fortawesome/fontawesome-free'
import About from './Components/About/About'
import Portofolio from './Components/Portofolio/Portofolio'
import Contacts from './Components/Contacts/Contacts'
function App() {
  let routes =createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portofolio/>},
      {path:'contact',element:<Contacts/>},
      {path:"*",element:<Notfound/>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
