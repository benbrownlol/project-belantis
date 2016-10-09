import appTemplate from './app.html';

const appComponent = {
  templateUrl: appTemplate,
  controller: appCtrl,
};

function appCtrl(authService, $state) {
  this.user = authService.getUser();
  this.logout = () => authService.logout().then(() => $state.go('auth.login'));
}
appCtrl.$inject = [
  'authService',
  '$state',
];

export default appComponent;
