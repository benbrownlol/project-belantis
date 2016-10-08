import firebase from 'firebase';

function authService($firebaseAuth) {
  const auth = $firebaseAuth(firebase.auth());
  let authData = null;

  this.login = user => auth
    .$signInWithEmailAndPassword(user.email, user.password)
    .then(storeAuthData);

  this.register = user => auth
    .$createUserWithEmailAndPassword(user.email, user.password)
    .then(storeAuthData);

  this.requireAuthentication = () => auth
    .$waitForSignIn()
    .then(onSignIn);

  this.isAuthenticated = () => !!authData;

  this.getUser = () => {
    if (authData) return authData;
  };

  function storeAuthData(data) {
    // REVIEW: Function side-effect - Should make pure?
    authData = data;
    return authData;
  }

  function onSignIn(user) {
    // REVIEW: Function side-effect - Should make pure?
    authData = user;
    return auth.$requireSignIn();
  }
}
authService.$inject = [
  '$firebaseAuth',
];

export default authService;
