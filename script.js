function appendNumber(num) {
    const pinInput = document.getElementById('pin');
    pinInput.value += num;
}

function clearPin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = '';
}

function submitPin() {
    const pinInput = document.getElementById('pin');
    alert(`You entered: ${pinInput.value}`);
    // Here you can add more functionality, like validating the PIN.
    clearPin();
}
