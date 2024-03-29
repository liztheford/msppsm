// Mock-up of using simple-counter-js
class SimpleCounter {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    increment(by = 1) {
        this.value += by;
    }

    getValue() {
        return this.value;
    }
}

// Mock-up usage of spft-tea
function enjoyTea() {
    console.log("Enjoying a soothing cup of tea!");
}

// Main application logic
const counter = new SimpleCounter(10); // Initialize counter with 10
counter.increment(5); // Increment counter by 5

console.log(`Current counter value: ${counter.getValue()}`); // Print current counter value
enjoyTea(); // Simulate using a functionality from spft-tea
