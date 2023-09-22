const emoticonButton = document.getElementById('button-emoticon');
const emoticonModal = document.getElementById('modal-emoticon');
const emoticonList = document.getElementById('list-emoticon');
const messageInput = document.getElementById('input-message');

emoticonButton.addEventListener('click', () => {
    if (emoticonList.classList.contains('active')) {
        emoticonList.classList.remove('active');
    } else {
        emoticonList.classList.add('active');
    }
});

function insertEmoticon(emoticon) {
    messageInput.value += emoticon;
    emoticonList.classList.remove('active');
}