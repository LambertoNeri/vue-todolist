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



	}


        

});

app.mount('#root')