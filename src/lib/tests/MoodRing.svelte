<script>
    let { mood = 'neutral' } = $props(); // Prop with default value
    let ringColor = $derived.by(() => {
        switch (mood) {
            case 'happy': return '#FFD700'; // Gold
            case 'sad': return '#4682B4'; // Steel Blue
            case 'angry': return '#FF4500'; // Orange Red
            case 'calm': return '#98FB98'; // Pale Green
            default: return '#808080'; // Gray
        }
    });
</script>>

<div class="ring-container">
    <div class="ring" style:background-color={ringColor}></div>
    <p class="font-bold mt-2">Mood: {mood}</p>
</div>

<style>
    .ring-container {
        text-align: center;
        margin-bottom: 24px;
    }
    .ring {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 auto;
        transition: background-color 0.3s ease;
    }
</style>