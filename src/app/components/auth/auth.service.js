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

  function storeAuthData(data) {
    // REVIEW: Function side-effect - Should make pure?
    authData = data;
    return authData;
  }
}
authService.$inject = [
  '$firebaseAuth',
];

export default authService;
