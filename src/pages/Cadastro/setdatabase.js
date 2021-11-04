import firebase from '../../config/firebase';

const database = firebase.database();
var key = database.ref().child('users').push().key;

export function addInfo(name,surname,email){

  database.ref('users/'+key+'/name').set(name);
  database.ref('users/'+key+'/surname').set(surname);
  database.ref('users/'+key+'/email').set(email);
  
}
export function addQuestion(question1,question2,question3,question4,question5){

  database.ref('users/'+key+'/question1').set(question1);
  database.ref('users/'+key+'/question2').set(question2);
  database.ref('users/'+key+'/question3').set(question3);
  database.ref('users/'+key+'/question4').set(question4);
  database.ref('users/'+key+'/question5').set(question5);
}