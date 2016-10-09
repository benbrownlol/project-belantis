import loader from 'angular-loading-bar';
import app from './app.module';

const common = angular
  .module('common', [
    loader,
    app,
  ])
  .run(run)
  .name;

function run($transitions, cfpLoadingBar) {
  $transitions.onStart({}, cfpLoadingBar.start);
  $transitions.onSuccess({}, cfpLoadingBar.complete);
}
run.$inject = [
  '$transitions',
  'cfpLoadingBar',
];

export default common;
