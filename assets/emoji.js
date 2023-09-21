const emoticonButton = document.getElementById('button-emoticon');
const emoticonModal = document.getElementById('modal-emoticon');
const emoticonList = document.getElementById('list-emoticon');
const messageInput = document.getElementById('input-message');

emoticonButton.addEventListener('click', () => {
    if (emoticonModal.style.display === 'none') {
        emoticonModal.style.display = 'block';
    } else {
        emoticonModal.style.display = 'none';
    }
});

function insertEmoticon(emoticon) {
    console.log(messageInput)
    messageInput.value += emoticon;

    emoticonModal.style.display = 'none';
}
