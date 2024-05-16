const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: ['Fare la spesa', 'Leggere un libro', 'Allenarsi'],
            newTodo: '' // variabile per contenere il valore del nuovo todo
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo !== '') {
                console.log("Nuovo ToDo aggiunto:", this.newTodo); // Debug: Stampa il valore aggiunto
                this.todos.push(this.newTodo); // Aggiunge il nuovo todo alla lista
                this.newTodo = ''; // Reset del campo di input dopo l'aggiunta
            }
        }
    }
}).mount('#app');
