import templateUrl from './app.html';

const appComponent = {
  templateUrl,
  controller(authService, $state) {
    'ngInject';

    this.user = authService.getUser();
    this.logout = () => authService.logout().then(() => $state.go('auth.login'));
  },
};

export default appComponent;
