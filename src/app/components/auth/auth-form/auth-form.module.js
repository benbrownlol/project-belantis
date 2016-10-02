import formComponent from './auth-form.component';

const authForm = angular
  .module('components.auth.auth-form', [])
  .component('authForm', formComponent)
  .name;

export default authForm;
