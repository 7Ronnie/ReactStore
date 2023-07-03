import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './About';
import Error from './Error';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useRouteError} from 'react-router-dom';


export default function App() {
  return (
  <div>
    <Header />
    <Body />
  </div>
  );
}

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <Error />
  
},
{
  path: "/about",
  element: <About />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {appRouter} />
  </React.StrictMode>
);



