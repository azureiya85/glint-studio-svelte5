<script>
    import MoodRing from './MoodRing.svelte';
    let selectedMood = $state('neutral');
</script>

<section class="bg-gray-800 text-white p-6">
    <div class="flex flex-col items-center justify-center text-center mb-4">
        <h1 class="font-bold mt-4 p-2">Mood Ring</h1>

        <select bind:value={selectedMood} class="select-field" onchange={() => console.log('Mood changed:', selectedMood)}>
            <option value="neutral">Neutral</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="calm">Calm</option>
        </select>

        <MoodRing mood={selectedMood} />
    </div>
</section>

<style>
    .select-field {
        background: #1e293b;
        width: 150px;
        padding: 8px;
        font-size: 16px;
        color: white;
        text-align: center;
        border-radius: 999px;
        outline: none;
        margin-top: 10px;
        border: 1px solid #7c70a0;
    }
</style>