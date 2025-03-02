<script>
    let colorA = $state('#FF0000');
    let colorB = $state('#0000FF');
    import ColorMixer from "./ColorMixer.svelte";
</script>

<section>
    <div class="flex flex-col items-center justify-center text-center mb-4">
        <h1 class="font-bold mt-4">Color Mixer</h1>
        <div class="flex gap-4 mt-4">
            <input type="color" bind:value={colorA} class="color-input" />
            <input type="color" bind:value={colorB} class="color-input" />
        </div>
        <ColorMixer color1={colorA} color2={colorB} />
    </div>
</section>

<style>
    .color-input {
        width: 60px;
        height: 40px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
</style>