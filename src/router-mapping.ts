import Loading from '@/components/Loading'
import Loadable from 'react-loadable';

const Home = Loadable({loader: () => import(/*webpackChunkName:'Home'*/'@/pages/home'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'404'*/'@/pages/error/404'),loading: Loading});

const routers = [
  { path: "/home", component: Home },
  { path: "/error/404", component: Error404 },
];
export default routers;