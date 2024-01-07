document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Define chat pairs for the chatbot
    const chatPairs = [
        [
            /hi|hello|hey|hi babe!/i,
            ["Hello!", "Hi there!", "How can I help you today?"]
        ],
        [
            /what is your name\?/i,
            ["You can call me Chatbot.", "I'm Chatbot, your virtual assistant."]
        ],
        [
            /how are you\?/i,
            ["I'm doing well, thank you!", "I'm just a computer program, but I'm here to assist you."]
        ],
        
        [
            /i love you aravind/i,
            ["i love you too haritha"]
        ],
        [
            /i wanna cuddle with you/i,
            ["me too babe"]
        ],
        [
            /pickup line/i,
            ["Are you an Angel?"]
        ],
        [
            /why\?/i,
            ["You keep appearing in my dreams"]
        ],
        [
            /aww/i,
            ["muahhh"]
        ]
        // Add more chat pairs here
]
    

    sendButton.addEventListener('click',function () {
        const userMessage = userInput.value;

        // Display the user's message in the chat box
        appendMessage('You', userMessage);

        // Generate and display the chatbot's reply based on chat pairs
        const chatbotReply = generateChatbotReply(userMessage, chatPairs);
        appendMessage('Chatbot', chatbotReply);

        // Clear the input field
        userInput.value = '';
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }

    // Generate chatbot reply based on user input and chat pairs
    function generateChatbotReply(userMessage, chatPairs) {
        for (const [pattern, responses] of chatPairs) {
            if (userMessage.match(pattern)) {
                // Randomly select a response from the matching pattern
                const randomIndex = Math.floor(Math.random() * responses.length);
                return responses[randomIndex];
            }
        }
        // If no match is found, return a default response
        return "I'm not sure how to respond to that.";
    }
});
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const themeToggle = document.getElementById('theme-toggle');

    if (themeStyle.getAttribute('href') === 'styles.css') {
        // Switch to dark mode
        themeStyle.setAttribute('href', 'dark-mode.css'); // Link to dark mode CSS
        themeToggle.textContent = 'Light Mode';
    } else {
        // Switch to light mode
        themeStyle.setAttribute('href', 'styles.css'); // Link to light mode CSS
        themeToggle.textContent = 'Dark Mode';
    }
}
