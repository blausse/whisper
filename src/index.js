import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainPage from './pages/main/MainPage';
import MenuPage from './pages/menu/MenuPage';
import './index.css'
import SelectPage from './pages/select/SelectPage';

const router = createBrowserRouter([
  {path:'/',element:<MainPage/>},
  {path:'/menu/:select',element:<MenuPage/>},
  {path:'/select',element:<SelectPage/>},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);