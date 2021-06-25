const socket = io();
// const form = document.getElementById('form');
// const nickname = document.getElementById('nickname');
// const input = document.getElementById('input');


nickname.addEventListener('click', (e) => {
    if (nickname.value) {
        socket.emit('connect', nickname.value);
    } else {
        alert('Please choose a nick name');
    }
})
input.addEventListener('click', (e) => {
    if (!nickname.value) {
        alert('Please choose a nick name');
    } else if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nickname.value && input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
}); //cannot add empty line here

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});