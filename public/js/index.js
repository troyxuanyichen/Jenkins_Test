const socket = io(); //connect
console.log('Socket init')

// Get username and room from URL
const url = new URL(window.location);
const username = url.searchParams.get('username');

socket.emit('joinChat', username);

socket.on('message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})

// socket.on('chat message', (msg) => {
//     const item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });