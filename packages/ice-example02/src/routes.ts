import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';

// IMPORTANT - 注意, 这里引入的需要是被 "数据层" + "视图层" 包裹起来的
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import NotFound from '@/components/NotFound';

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/dashboard',
      component: Dashboard,
    }, {
      path: '/',
      exact: true,
      component: Home,
    }, {
      component: NotFound,
    }],
  },
];

export default routerConfig;
