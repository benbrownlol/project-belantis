import angular from 'angular';
import contactService from './contact.service';
import contactNew from './contact-new/contact-new.module';
import contactDetail from './contact-detail/contact-detail.module';
import contactEdit from './contact-edit/contact-edit.module';

const contact = angular
  .module('components.contact', [
    contactNew,
    contactDetail,
    contactEdit,
  ])
  .service('contactService', contactService)
  .name;

export default contact;
