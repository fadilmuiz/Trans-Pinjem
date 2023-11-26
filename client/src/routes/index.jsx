import MainLayout from '@layouts/MainLayout';
import RegisterPage from '@pages/Register';
import Home from '@pages/Home';
import LoginPage from '@pages/Login';
import NotFound from '@pages/NotFound';
import Detail from '@pages/Detail';
import FormAdd from '@pages/FormAdd';
import FormEdit from '@pages/FormEdit';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: true,
    component: Home,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
  { path: '/Login', name: 'Login', protected: false, component: LoginPage, layout: MainLayout },
  { path: '/Register', name: 'Register', protected: false, component: RegisterPage, layout: MainLayout },
  { path: '/Detail/:id_trans', name: 'Detail', protected: true, component: Detail, layout: MainLayout },
  { path: '/add-trans', name: 'FormAdd', protected: true, component: FormAdd, layout: MainLayout },
  { path: '/edit-trans/:id_trans', name: 'FormEdit', protected: true, component: FormEdit, layout: MainLayout },
];

export default routes;
