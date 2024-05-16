/*
const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: ['Fare la spesa', 'Leggere un libro', 'Allenarsi'],
            newTodo: '' // Variabile per contenere il valore del nuovo todo
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo !== '') {
                console.log("Nuovo ToDo aggiunto:", this.newTodo); // Stampa il valore da aggiungere prima di reset
                this.todos.push(this.newTodo); // Aggiunge il nuovo todo alla lista
                this.newTodo = ''; // Reset del campo di input dopo l'aggiunta
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1); // Rimuove il todo in base all'indice
            console.log("ToDo rimosso:", this.todos); // Stampa l'array aggiornato in console
        }
    }
}).mount('#app');
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { title: 'Fare la spesa', done: false },
                { title: 'Leggere un libro', done: true },
                { title: 'Allenarsi', done: false }
            ],
            newTodo: ''
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo !== '') {
                console.log("Nuovo ToDo aggiunto:", this.newTodo); 
                this.todos.push({ title: this.newTodo, done: false }); // Aggiunge il nuovo todo come oggetto
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1); // Rimuove il todo in base all'indice
            console.log("ToDo rimosso:", this.todos); // Stampa l'array aggiornato in console
        },
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done; // Inverte il booleano "done"
            console.log("Stato ToDo modificato:", this.todos[index]); // Stampa lo stato modificato del ToDo
        }
    }
}).mount('#app');
