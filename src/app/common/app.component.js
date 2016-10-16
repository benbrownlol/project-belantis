import templateUrl from './app.html';

const appComponent = {
  templateUrl,
  controller: class AppComponent {
    constructor(AuthService, $state) {
      'ngInject';

      this.user = AuthService.getUser();
      this.logout = () => AuthService.logout().then(() => $state.go('auth.login'));
    }
  },
};

export default appComponent;
