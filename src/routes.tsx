import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen'


const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  HOME PAGE
const Home = Loadable(lazy(() => import('./components/Home/Home')));

const routes: RouteObject[] = [
//   {
//     path: 'authentication',
//     children: [
//       {
//         path: 'login',
//         element: (
//             <Login />
//         ),
//       },
//       {
//         path: 'register',
//         element: (
         
//             <Register />
         
//         ),
//       },
//     ],
//   },

  {
    path: '*',
    element: <Home />
  },
];

export default routes;