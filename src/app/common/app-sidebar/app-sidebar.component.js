import templateUrl from './app-sidebar.html';

const sidebarComponent = {
  templateUrl,
  controller() {
    'ngInject';

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
  },
};

export default sidebarComponent;
