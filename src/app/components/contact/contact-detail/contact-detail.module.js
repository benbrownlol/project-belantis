import angular from 'angular';
import contactDetailComponent from './contact-detail.component';
import './contact-detail.scss';

const contactDetail = angular
  .module('components.contact.contact-detail', [])
  .component('contactDetail', contactDetailComponent)
  .name;

export default contactDetail;
