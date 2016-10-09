import sidebarTemplate from './app-sidebar.html';

const sidebarComponent = {
  templateUrl: sidebarTemplate,
  controller: sidebarCtrl,
};

function sidebarCtrl() {
  this.contactTags = [{
    label: 'All contacts',
    icon: 'star',
  }, {
    label: 'Friends',
    icon: 'people',
  }, {
    label: 'Family',
    icon: 'child_care',
  }, {
    label: 'Acquaintances',
    icon: 'accessibility',
  }, {
    label: 'Following',
    icon: 'remove_red_eye',
  }];
}
sidebarCtrl.$inject = [
];

export default sidebarComponent;
