class CounterClass {
	count = $state(0);
	increment = $state(1);
	decrement = $state(1);

	inc() {
		this.count += this.increment;
	}

	dec() {
		this.count -= this.decrement;
	}

	reset() {
		this.increment = 1;
		this.decrement = 1;
		this.count = 0;
	}
}

export const counter = new CounterClass();

