import firebase from 'firebase';

function contactService(authService, $firebaseArray) {
  const ref = firebase.database().ref('contacts');
  const uid = authService.getUser().uid;

  this.createNewContact = (contact) => $firebaseArray(ref.child(uid)).$add(contact);
}
contactService.$inject = [
  'authService',
  '$firebaseArray',
];

export default contactService;
