import angular from 'angular';
import contactTagComponent from './contact-tag.component';

const contactTag = angular
  .module('components.contact.contact-tag', [])
  .component('contactTag', contactTagComponent)
  .name;

export default contactTag;
