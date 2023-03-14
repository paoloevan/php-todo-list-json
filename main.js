const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            task: ''
        }
    },
    methods: {
        callServer() {
            axios
                .get('read.php')
                .then(response => {
                    console.log(response.data);
                    this.todoList = response.data
                })
        },
        saveTasks() {
            const data = {
                text: this.task
            }
            axios
                .post('server.php', data, {
                    headers: { 'Content-type': 'multipart/form-data' }
                })
                .then(response => {
                    console.log(response.data);
                    this.todoList = response.data;
                })
            this.task = ''
        }
    },
    mounted() {
        this.callServer()
    }
}).mount('#app')