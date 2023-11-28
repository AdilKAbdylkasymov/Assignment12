new Vue({
    el: '#app',
    data: {
      tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
      ],
      newTask: { title: '', completed: false },
    },
    computed: {
      incompleteTasks() {
        return this.tasks.filter(task => !task.completed);
      },
      completedTasks() {
        return this.tasks.filter(task => task.completed);
      },
      totalIncompleteTasks() {
        return this.incompleteTasks.length;
      },
      totalCompletedTasks() {
        return this.completedTasks.length;
      },
    },
    methods: {
      addTask() {
        if (this.newTask.title.trim() !== '') {
          this.tasks.push({
            id: this.tasks.length + 1,
            title: this.newTask.title,
            completed: this.newTask.completed
          });
          this.newTask.title = '';
          this.newTask.completed = false;
        }
      },
      toggleTaskStatus(task) {
        task.completed = !task.completed;
      },
    },
    watch: {
      tasks: {
        handler(newTasks) {
          console.log('Task list modified:', newTasks);
        },
        deep: true,
      },
    },
    created() {
    },
  });