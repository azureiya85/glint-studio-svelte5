<script lang="ts">
    import TaskCard from "./TaskCard.svelte";

    let tasks = $state([
        { id: crypto.randomUUID(), title: 'Write Docs', completed: false, priority: 'high' },
        { id: crypto.randomUUID(), title: 'Fix Bugs', completed: true, priority: 'medium' },
        { id: crypto.randomUUID(), title: 'Deploy App', completed: false, priority: 'low' }
    ]);

    let filter = $state('all');
    let newTaskTitle = $state('');
    let newTaskPriority = $state('low');

    function addTask() {
        if (newTaskTitle.trim() === '') return;
        tasks.push({ 
            id: crypto.randomUUID(), 
            title: newTaskTitle, 
            completed: false, 
            priority: newTaskPriority 
        });
        newTaskTitle = '';
    }

    function toggleTask(index: number) {
        tasks[index].completed = !tasks[index].completed;
    }

    function deleteTask(index: number) {
        tasks.splice(index, 1);
    }

    function editTask(index: number, newTitle: string) {
        tasks[index].title = newTitle;
    }

    let filteredTasks = $derived.by(() => {
        if (filter === 'completed') return tasks.filter(task => task.completed);
        if (filter === 'pending') return tasks.filter(task => !task.completed);
        return tasks;
    });
</script>

<section>
    <div class="flex flex-col items-center justify-center text-center mb-4">
        <h1 class="font-bold mt-4">Task List</h1>

        <div class="filter-buttons">
            <button onclick={() => filter = 'all'} class:active={filter === 'all'}>All</button>
            <button onclick={() => filter = 'completed'} class:active={filter === 'completed'}>Completed</button>
            <button onclick={() => filter = 'pending'} class:active={filter === 'pending'}>Pending</button>
        </div>

        <div class="add-task text-black">
            <input type="text" bind:value={newTaskTitle} placeholder="New task..." />
            <select bind:value={newTaskPriority}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button onclick={addTask}>Add</button>
        </div>

        {#each filteredTasks as task, index (task.id)}
            <TaskCard task={task} 
                      on:toggle={() => toggleTask(index)} 
                      on:delete={() => deleteTask(index)}
                      on:edit={(e) => editTask(index, e.detail.newTitle)} />
        {/each}
    </div>
</section>