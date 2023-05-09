const app = Vue.createApp({
    data() {
        return {
        todos: [
            {
                text: 'comprare pincolo',
                done: true,
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
	}


        

});

app.mount('#root')