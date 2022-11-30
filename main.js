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
            axios
                .post(this.url, { task: this.task }, {
                    headers: { 'Content_type': 'multipart/form-data' }
                })
                .then(response => {
                    console.log(response.data);
                    //this.todoList.push(this.task)
                    //response.data = this.todoList
                    // this.todoList = response.data
                    response.data = this.todoList

                })

        }
    },
    mounted() {
        this.callServer(this.url)
    }
}).mount('#app')