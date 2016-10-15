import angular from 'angular';
import contactComponent from './contact.component';
import contactStyles from './contact.scss';

const contact = angular
  .module('components.contact.contact', [])
  .component('contact', contactComponent)
  .name;

export default contact;
