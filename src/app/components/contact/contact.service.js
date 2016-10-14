import firebase from 'firebase';

function contactService(authService, $firebaseArray) {
  'ngInject';

  const ref = firebase.database().ref('contacts');
  const uid = authService.getUser().uid;

  this.createNewContact = (contact) => $firebaseArray(ref.child(uid)).$add(contact);
}

export default contactService;
