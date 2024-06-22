// message.js

document.addEventListener('DOMContentLoaded', function() {
    const messageBtn = document.getElementById('begin-celebration');
    const messageContainer = document.querySelector('.message');
    const messageText = document.querySelector('.message__text');

    messageBtn.addEventListener('click', function() {
        messageContainer.classList.toggle('clicked');
        if (messageContainer.classList.contains('clicked')) {
            setTimeout(function() {
                messageText.style.opacity = '1';
                messageText.style.visibility = 'visible';
            }, 1000);
        } else {
            messageText.style.opacity = '0';
            messageText.style.visibility = 'hidden';
        }
    });
});
