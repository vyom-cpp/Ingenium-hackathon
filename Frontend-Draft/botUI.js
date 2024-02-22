const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const messages = document.querySelector('.messages');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, 'user');
    userInput.value = '';
    
    let botResponse;
    if (userMessage.toLowerCase() === 'hello' || userMessage.toLowerCase() === 'hii' || userMessage.toLowerCase() === 'hi') {
      botResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase() === 'goodbye' || userMessage.toLowerCase() === 'bye') {
      botResponse = 'It was pleasure to chat with you, please come back again.';
    } else {
      botResponse = 'Apologies, I am having trouble grasping this concept. Could you please clarify or provide more details?';
    }
    setTimeout(() => {
      addMessage(botResponse, 'bot');
    }, 1000);
  }
};

function addMessage(message, type) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  messageElement.textContent = message;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}