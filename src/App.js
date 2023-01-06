import React from "react";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom";
import Home from "./container/Home";
import Explore from "./container/Explore";
import Profile from "./container/Profile";
import RootLasyout from "./layouts/RootLasyout";
import AddPost from "./container/AddPost";


const router = createBrowserRouter (
    createRoutesFromElements (
        <Route path='/'>
            <Route path='art.chain' element={<Home/>} />
            <Route path='explore' element={<Explore/>}/>
            <Route path='add' element={<AddPost/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
    )
)

const App = () => {
  return (
      <RouterProvider router={router}/>
  )
}
export default App;