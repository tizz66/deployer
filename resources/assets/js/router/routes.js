import App from '../app/containers/App';
import Dashboard from '../dashboard/components/Dashboard';
import Profile from '../profile/Profile';

import UserAdmin from '../admin/Users';
import GroupAdmin from '../admin/Groups';
import TemplateAdmin from '../admin/Templates';
import ProjectAdmin from '../admin/Projects';
import ProjectDetails from '../project/containers/Details';

import Deployments from '../project/components/Deployments';
import Servers from '../project/components/Servers';
import Commands from '../project/components/Commands';
import Files from '../project/components/Files';
import Health from '../project/components/Health';
import Notifications from '../project/components/Notifications';

import * as actions from '../app/actions';
import decorateRoutes from './decorator';

const indexRoute = {
  component: Dashboard,
  title: 'dashboard.title',
};

const childRoutes = [
  { path: 'profile', component: Profile, title: 'users.update_profile' },
  {
    path: 'projects/:id',
    component: ProjectDetails,
    indexRoute: { component: Deployments },
    childRoutes: [
      { path: 'servers', component: Servers },
      { path: 'commands', component: Commands },
      { path: 'files', component: Files },
      { path: 'notifications', component: Notifications },
      { path: 'health', component: Health },
    ],
  },
  {
    path: 'admin',
    childRoutes: [
      { path: 'users', component: UserAdmin, title: 'users.manage' },
      { path: 'groups', component: GroupAdmin, title: 'groups.manage' },
      { path: 'templates', component: TemplateAdmin, title: 'templates.manage' },
      { path: 'projects', component: ProjectAdmin, title: 'projects.manage' },
    ],
  },
];

export default function (store) {
  const updateTitle = (nextState) => {
    const routes = nextState.routes;
    const string = routes[routes.length - 1].title;
    const title = string ? Lang.get(string) : '';

    store.dispatch(actions.setPageTitle(title));
  };

  decorateRoutes(childRoutes, updateTitle);

  return {
    path: '/',
    component: App,
    indexRoute: {
      ...indexRoute,
      onEnter: updateTitle,
    },
    childRoutes,
  };
}
