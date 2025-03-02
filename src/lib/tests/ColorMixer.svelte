<script>
    let { color1 = '#FF0000', color2 = '#0000FF' } = $props(); // Two color props
    let mixedColor = $derived(() => {
        const c1 = parseInt(color1.slice(1), 16);
        const c2 = parseInt(color2.slice(1), 16);
        const mixed = Math.floor((c1 + c2) / 2).toString(16).padStart(6, '0');
        return `#${mixed}`;
    });
</script>

<div class="mixer-container">
    <div class="color-box" style:background-color={color1}></div>
    <div class="color-box" style:background-color={color2}></div>
    <div class="color-box mixed" style:background-color={mixedColor()}></div>
    <p class="font-bold">Mixed: {mixedColor()}</p>
</div>

<style>
    .mixer-container {
        text-align: center;
        margin-bottom: 24px;
    }
    .color-box {
        width: 80px;
        height: 80px;
        display: inline-block;
        margin: 0 10px;
        border-radius: 8px;
    }
    .mixed {
        width: 120px;
        height: 120px;
    }
</style>