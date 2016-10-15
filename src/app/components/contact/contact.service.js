import firebase from 'firebase';

function contactService(authService, $firebaseArray, $firebaseObject) {
  'ngInject';

  const ref = firebase.database().ref('contacts');
  const uid = authService.getUser().uid;

  this.createNewContact = (contact) => $firebaseArray(ref.child(uid)).$add(contact);
  this.getContactById = (id) => $firebaseObject(ref.child(uid).child(id));
  this.updateContact = (contact) => contact.$save();
  this.deleteContact = (contact) => contact.$remove();
}

export default contactService;
