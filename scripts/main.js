const { createApp } = Vue;

// Definizione dell'applicazione Vue
createApp({
    data() {
        return {
            // Lista iniziale di cose da fare
            todos: ['Fare la spesa', 'Leggere un libro', 'Allenarsi']
        };
    }
}).mount('#app');