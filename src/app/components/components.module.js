import angular from 'angular';
import auth from './auth/auth.module';
import contact from './contact/contact.module';

const components = angular
  .module('components', [
    auth,
    contact,
  ])
  .name;

export default components;
