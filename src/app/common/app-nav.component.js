import navTemplate from './app-nav.html';

const navComponent = {
  bindings: {
    user: '<',
    logout: '&',
  },
  templateUrl: navTemplate,
  controller: navCtrl,
};

function navCtrl() {

}
navCtrl.$inject = [
];

export default navComponent;
