const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'server.php',
            todoList: []
        }
    },
    methods: {
        callServer(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.todoList = response.data;
                })
                .catch(err => {
                    console.error(err.message);
                })
        }
    },
    mounted() {
        this.callServer(this.url)
    }
}).mount('#app')