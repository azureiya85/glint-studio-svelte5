
<script>
    import Greeting from './Greeting.svelte';
    let nameInput = $state('World');
     // Reactive state for the input by importing Greeting.svelte
</script>

<section>
    <div class="flex flex-col items-center justify-center text-center mb-4">
        <h1 class="font-bold mt-4">Props Demo</h1>
        <input
            type="text"
            bind:value={nameInput}
            placeholder="Enter your name..."
            class="input-field"
        />
        <Greeting name={nameInput} />
    </div>
</section>

<style>
    .input-field {
        background: #1e293b;
        width: 200px;
        box-shadow: 0 0 0 1px #7c70a0;
        padding: 10px;
        font-size: 16px;
        color: white;
        text-align: center;
        border-radius: 999px;
        outline: none;
        margin-top: 10px;
    }
</style>