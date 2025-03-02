
<script>
    let fahrenheit = $state(32); // Initial value in Fahrenheit
    let celsius = $derived(((fahrenheit - 32) * 5) / 9); // Derived Celsius value
    let fahrenheitFromCelsius = $derived((celsius * 9) / 5 + 32); // Derived back to Fahrenheit for validation
</script>

<section>
    <div class="flex flex-col items-center justify-center text-center mb-4">
        <h1 class="font-bold mt-4">Temperature Converter</h1>
        <div class="flex flex-col gap-4 mt-4">
            <div>
                <label for="fahrenheit-input" class="font-bold">Fahrenheit:</label>
                <input
                id="fahrenheit-input"
                    type="number"
                    bind:value={fahrenheit}
                    class="input-field"
                />
            </div>
            <p class="text-lg">Celsius: {celsius.toFixed(2)}°C</p>
            <p class="text-lg">Back to Fahrenheit: {fahrenheitFromCelsius.toFixed(2)}°F</p>
        </div>
    </div>
</section>

<style>
    .input-field {
        background: #1e293b;
        width: 100px;
        box-shadow: 0 0 0 1px #7c70a0;
        padding: 8px;
        font-size: 16px;
        color: white;
        text-align: center;
        border-radius: 999px;
        outline: none;
        margin-left: 10px;
    }
</style>