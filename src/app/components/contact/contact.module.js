import angular from 'angular';
import contactService from './contact.service';
import contactNew from './contact-new/contact-new.module';
import contactDetail from './contact-detail/contact-detail.module';
import contactEdit from './contact-edit/contact-edit.module';
import contactTag from './contact-tag/contact-tag.module';

const contact = angular
  .module('components.contact', [
    contactNew,
    contactDetail,
    contactEdit,
    contactTag,
  ])
  .service('contactService', contactService)
  .name;

export default contact;
