const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'server.php',
            todoList: [],
            task: ''
        }
    },
    methods: {
        callServer(url) {
            axios
                .get(url)
                .then(response => {
                    this.todoList = response.data;
                })
                .catch(err => {
                    console.error(err.message);
                })
        },
        pushTask(url) {
            axios
                .post(url, {
                    headers: { 'Content_type': 'multipart/form-data' }
                })
                .then(response => {
                    console.log(response);
                })
        }
    },
    mounted() {
        this.callServer(this.url)
    }
}).mount('#app')