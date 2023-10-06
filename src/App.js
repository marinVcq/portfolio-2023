// React router dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  createHashRouter,
} from "react-router-dom";

// Import styles
import './style/main.css';

//Import pages and components
import Home from "./pages/Home";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Outlet />
      <Footer/>
    </>
  );
};


const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      }
    ]
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;