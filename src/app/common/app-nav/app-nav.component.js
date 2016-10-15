import templateUrl from './app-nav.html';

const navComponent = {
  bindings: {
    user: '<',
    onLogout: '&',
  },
  templateUrl,
};

export default navComponent;
