import firebase from '../../config/firebase';

export function addInfo(name,surname,email, addComplete){
  firebase.firestore().collection('users').add({
    name:nome,
    surname:sobrenome,
    email:email
  }).then((data) => addComplete(data))
  .catch((error) => console.log(error))
}