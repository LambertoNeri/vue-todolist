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

        inputError: false,

        i: 0,
        li: [],
        toTrim: '',

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
            let toPush = this.toTrim.trim()
            console.log (toPush.length)
            let newTodo = {
                text: toPush,
                done: false,
            }
            if (toPush.length >= 5) {
                this.todos.unshift({
                    ...newTodo
                });
                this.toTrim = '';
                this.inputError = false;
            } else {
                this.inputError = true;
            }
            
        },

        deleteLi(i){
            this.todos.splice(i, 1)
        }


	}
});

app.mount('#root')