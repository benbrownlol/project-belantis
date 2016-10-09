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

  this.logout = () => auth
    .$signOut()
    .then(clearAuthData);

  this.requireAuthentication = () => auth
    .$waitForSignIn()
    .then(onSignIn);

  this.isAuthenticated = () => !!authData;

  this.getUser = () => {
    if (authData) return authData;
  };

  function onSignIn(user) {
    // REVIEW: Function side-effect - Should make pure?
    authData = user;
    return auth.$requireSignIn();
  }

  function storeAuthData(data) {
    // REVIEW: Function side-effect - Should make pure?
    authData = data;
    return authData;
  }

  function clearAuthData() {
    // REVIEW: Function side-effect - Should make pure?
    authData = null;
  }
}
authService.$inject = [
  '$firebaseAuth',
];

export default authService;
