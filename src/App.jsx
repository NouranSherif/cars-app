import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import NavBar from './assets/components/NavBar/NavBar';
import Footer from './assets/components/Footer/Footer';
import LandingPage from './assets/components/LandingPage/LandingPage';
import CarsPage from './assets/components/CarsPage/CarsPage';
import CarDetails from './assets/components/CarDetails/CarDetails';
import MasterLayout from './assets/components/MasterLayout/MasterLayout';
import NotFound from './assets/components/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: 'home',
        element: <LandingPage />,
      },
      {
        path: 'cars',
        element: <CarsPage />,
      },
      { path: 'details', element: <CarDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
