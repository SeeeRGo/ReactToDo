import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyCZmh-4KJEWd80sw3QUKW9l9fSj1c362ek",
	    authDomain: "todo-24d28.firebaseapp.com",
	    databaseURL: "https://todo-24d28.firebaseio.com",
	    projectId: "todo-24d28",
	    storageBucket: "todo-24d28.appspot.com",
	    messagingSenderId: "1032767596039"
  	};

  	firebase.initializeApp(config);
} catch (err) {

}

export var firebaseRef = firebase.database().ref()
export default firebase;