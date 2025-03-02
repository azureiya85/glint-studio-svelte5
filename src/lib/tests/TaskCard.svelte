<script>
    import { createEventDispatcher } from 'svelte';

    let { task = { id: '', title: 'Untitled', completed: false, priority: 'low' } } = $props();
    const dispatch = createEventDispatcher();

    let isEditing = $state(false);
    let editedTitle = $state(task.title);

    function toggleTask() {
        dispatch('toggle');
    }

    function deleteTask() {
        dispatch('delete');
    }

    function enableEdit() {
        isEditing = true;
        editedTitle = task.title; // Reset edit field when clicking "Edit"
    }

    function saveEdit() {
        if (editedTitle.trim() !== '') {
            dispatch('edit', { newTitle: editedTitle });
        }
        isEditing = false;
    }
</script>

<div class="task-card" class:completed={task.completed}>
    <div class="task-info">
        {#if isEditing}
            <!-- Editing Mode -->
            <input type="text" bind:value={editedTitle} class="edit-input" />
            <button class="save-btn" onclick={saveEdit}>💾 Save</button>
        {:else}
            <!-- Normal View Mode -->
            <button class="task-title" onclick={toggleTask}>
                {task.title}
            </button>
            <span class="task-status">
                {task.completed ? '✅ Done' : '⏳ Pending'}
            </span>
        {/if}
    </div>

    <div class="task-actions">
        {#if !isEditing}
            <button class="edit-btn" onclick={enableEdit}>✏️</button>
        {/if}
        <button class="delete-btn" onclick={deleteTask}>❌</button>
    </div>
</div>

<style>
    .task-card {
        background: #1e293b;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 0 0 1px #7c70a0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background 0.3s ease;
        margin-bottom: 10px;
    }

    .task-card.completed {
        opacity: 0.5;
        text-decoration: line-through;
    }

    .task-info {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .task-title {
        background: none;
        border: none;
        font: inherit;
        color: white;
        cursor: pointer;
        text-align: left;
        font-size: 16px;
    }

    .task-status {
        font-size: 14px;
        color: #cbd5e1;
    }

    .edit-btn,
    .delete-btn,
    .save-btn {
        background: #374151;
        border: none;
        padding: 6px 10px;
        border-radius: 6px;
        cursor: pointer;
        color: white;
        font-size: 14px;
        transition: background 0.2s;
    }

    .edit-btn:hover {
        background: #6366f1;
    }

    .delete-btn:hover {
        background: #e02424;
    }

    .save-btn {
        background: #10b981;
    }

    .save-btn:hover {
        background: #059669;
    }

    .edit-input {
        background: #1e293b;
        color: white;
        border: 1px solid #7c70a0;
        padding: 5px;
        border-radius: 5px;
        outline: none;
    }

    .task-actions {
        display: flex;
        gap: 8px;
    }
</style>