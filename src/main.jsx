import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import CardDetails from './components/CardDetails/CardDetails';
import DonatedList from './components/DonatedList/DonatedList';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/cardDetail/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../data.json')
      },
      {
        path:'/donated',
        element: <DonatedList></DonatedList>, 
        loader: () => fetch('../data.json')
      },
      {
        path:'/statictis',
        element: <Statistics></Statistics>, 
        loader: () => fetch('../data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
