import firebase from 'firebase';

export default class firebaseHandler {
  constructor (props) {
    this.setTodos = props.setTodos;
    this.markAsDone= props.markAsDone;
    this.db = firebase.database();
    this.listenForItems(this.db.ref('/todos2'));
  }

  listenForItems = itemsRef => {
    itemsRef.on('value', (snap) => {
      const data = snap.val();
      if (!data)
        return;
      const keys = Object.keys(data);
      this.setTodos(keys.map(key => ({ key, ...data[key] })))
    });
  }

  markAsFinished =  (key) =>  {
    const taskRef = this.db.ref('todos2/' + key);
    taskRef.once('value', snap => {
      const data = snap.val();
      data.isDone = !data.isDone;
      taskRef.update(data);
    })
  };

  addTodo = (name) => this.db.ref('/todos2').push({label: name, isDone: false})
}