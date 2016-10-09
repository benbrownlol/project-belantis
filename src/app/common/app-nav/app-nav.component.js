import navTemplate from './app-nav.html';

const navComponent = {
  bindings: {
    user: '<',
    onLogout: '&',
  },
  templateUrl: navTemplate,
  controller: navCtrl,
};

function navCtrl() {

}
navCtrl.$inject = [
];

export default navComponent;
