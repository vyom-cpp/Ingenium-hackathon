const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const messages = document.querySelector('.messages');

sendButton.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, 'user');
    userInput.value = '';
    
    const botResponse = 'Hello! How can I assist you?';
    setTimeout(() => {
      addMessage(botResponse, 'bot');
    }, 1000);
  }
});

function addMessage(message, type) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  messageElement.textContent = message;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}