import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import Cart from './components/Cart/cart';
import LoadingScreen from './components/LoadingScreen'
import ProductDetail from './components/ProductDetail/ProductDetail';


const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  HOME PAGE
const Home = Loadable(lazy(() => import('./components/Home/Home')));

// ABOUT PAGE

const About = Loadable(lazy(() => import('./components/About/About')));

const ProfileForm = Loadable(lazy(() => import('./components/form/ProfileForm')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'cart',
    element: <Cart />
  },
  {
    path:"/products/:id",
    element:<ProductDetail/>
  },
  {
    path:"register",
    element:<ProfileForm/>
  }
];

export default routes;