document.addEventListener('DOMContentLoaded', function() {
    const balanceElement = document.getElementById('balance');
    const recipientElement = document.getElementById('recipient');
    const amountElement = document.getElementById('amount');
    const sendButton = document.getElementById('send');
    const statusElement = document.getElementById('status');

    // Dummy balance for illustration
    let balance = 100; // Assume 100 ICP for example

    // Display initial balance
    balanceElement.textContent = `${balance} ICP`;

    // Handle sending tokens
    sendButton.addEventListener('click', async function() {
        const recipient = recipientElement.value;
        const amount = parseFloat(amountElement.value);

        if (!recipient || amount <= 0 || amount > balance) {
            statusElement.textContent = "Invalid recipient address or amount.";
            return;
        }

        // Example: Sending tokens (replace with actual blockchain call)
        try {
            // Deduct amount from balance (simplified logic)
            balance -= amount;
            balanceElement.textContent = `${balance} ICP`;

            // Reset form
            recipientElement.value = '';
            amountElement.value = '';

            statusElement.textContent = `Successfully sent ${amount} ICP to ${recipient}.`;
        } catch (error) {
            console.error('Error sending tokens:', error);
            statusElement.textContent = 'Failed to send tokens.';
        }
    });
});
