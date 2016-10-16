import angular from 'angular';
import contactComponent from './contact.component';
import './contact.scss';

const contact = angular
  .module('components.contact.contact', [])
  .component('contact', contactComponent)
  .name;

export default contact;
