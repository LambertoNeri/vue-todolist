const app = Vue.createApp({
    data() {
        return {
        todos: [
            {
                text: 'comprare pincolo',
                done: false,
            },
            {
                text: 'comprare limoni',
                done: true,
            },
            {
                text: 'comprare mele',
                done: true,
            },
            {
                text: 'comprare uva',
                done: true,
            },   

        ],

        newTodo: {
            text: '',
            done: false,
        },

        inputError: false,

        cleanedTodo: '',


    };
    },
    methods: {
        toggle(i){
            if (i.done == false) {
                i.done = true
            } else {
                i.done = false
            }
        },

        addTodo() {
            /*this.cleanedTodo = this.newTodo.trim();
            if (this.cleanedTodo.length <= 5) {
                this.todos.unshift(this.cleanedTodo);
                this.newTodo = '';
                this.inputError = false;
            }else{
                this.inputError = true
            } */
            this.todos.unshift(this.newTodo)
        },



	}


        

});

app.mount('#root')