import appTemplate from './app.html';

const appComponent = {
  templateUrl: appTemplate,
  controller: appCtrl,
};

function appCtrl(authService, $state) {
  this.user = authService.getUser();
  this.logout = () => {
    console.log('Logout();');
  };
}
appCtrl.$inject = [
  'authService',
  '$state',
];

export default appComponent;
