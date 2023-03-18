import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Home from './pages/Main/Home/Home';
import Categories from './pages/Main/Categories/Categories';

import Cart from './pages/Main/Cart/Cart';
import AllProducts from './pages/Main/AllProducts/AllProducts';
import NotFound from './pages/Main/Not Found/NotFound';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/AllProducts',
        element: <AllProducts />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
