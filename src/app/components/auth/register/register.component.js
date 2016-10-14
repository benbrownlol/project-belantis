import templateUrl from './register.html';

const registerComponent = {
  templateUrl,
  controller(authService, $state) {
    'ngInject';

    this.$onInit = () => {
      this.error = null;
      this.user = {
        email: '',
        password: '',
      };
    };
    this.createUser = (event) => authService
      .register(event.user)
      .then(() => {
        $state.go('app');
      }, reason => {
        this.error = reason.message;
      });
  },
};

export default registerComponent;
