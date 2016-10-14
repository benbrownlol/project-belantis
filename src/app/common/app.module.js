import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import appStyles from './app.scss';
import appNav from './app-nav/app-nav.module';
import appSidebar from './app-sidebar/app-sidebar.module';

const app = angular
  .module('common.app', [
    uiRouter,
    appNav,
    appSidebar,
  ])
  .component('app', appComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('app', {
        // redirectTo: 'contacts',
        url: '/app',
        data: {
          requiredAuth: true,
        },
        component: 'app',
      });
  })
  .name;

export default app;
