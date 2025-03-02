<!-- Greeting.svelte -->
<script>
    
    let { name = 'Stranger' } = $props();
    
</script>

<div class="greeting-container">
    <p class="font-bold mb-4 text-lg">Hello, {name}!</p>
</div>

<style>
    .greeting-container {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 24px;
    }
</style>