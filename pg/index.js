import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCZmh-4KJEWd80sw3QUKW9l9fSj1c362ek",
    authDomain: "todo-24d28.firebaseapp.com",
    databaseURL: "https://todo-24d28.firebaseio.com",
    projectId: "todo-24d28",
    storageBucket: "todo-24d28.appspot.com",
    messagingSenderId: "1032767596039"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()
  firebaseRef.set({
  	app: {
  		name: 'To Do App',
  		version: '1.0'
  	},
  	isRunning: true,
  	user: {
  		name: 'Me',
  		age: 12
  	}
  });

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) =>{
	console.log('new todo', snapshot.key, snapshot.val());
})

todosRef.push({text: 'todo1'});
todosRef.push({text: 'todo2'});