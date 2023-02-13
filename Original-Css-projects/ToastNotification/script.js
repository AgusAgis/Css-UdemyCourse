const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Hello User, here we are',
    'Message for guests',
    'Let the party begin',
    'We made it!',
]

button.addEventListener('click', () => createNotification())

function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}