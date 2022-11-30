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
        saveTasks() {
            const data = {
                task: this.task
            }
            axios
                .post(this.url, data, {
                    headers: { 'Content_type': 'multipart/form-data' }
                })
                .then(response => {
                    this.todoList.push(this.task)
                    response.data = this.todoList
                    //response.data.push(data.task)
                    console.log(response.data);
                    //this.todoList = response.data

                })

        }
    },
    mounted() {
        this.callServer(this.url)
    }
}).mount('#app')