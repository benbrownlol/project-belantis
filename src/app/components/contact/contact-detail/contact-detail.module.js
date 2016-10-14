import angular from 'angular';
import contactDetailComponent from './contact-detail.component';
import contactDetailStyles from './contact-detail.scss';

const contactDetail = angular
  .module('components.contact-detail', [])
  .component('contactDetail', contactDetailComponent)
  .name;

export default contactDetail;
