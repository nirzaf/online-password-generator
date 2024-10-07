function convertText() {
    const textInput = document.getElementById('text-input').value;
    const currentDate = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
    document.getElementById('converted-text').value = textInput.split(' ').join('-') + '-' + currentDate;
    document.getElementById('copyButton').disabled = false;
}

function copyConvertedText() {
    const convertedText = document.getElementById('converted-text').value;
    const textArea = document.createElement('textarea');
    textArea.value = convertedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    document.getElementById('copyButton').textContent = 'Text Copied';
    document.getElementById('copyButton').disabled = true;
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
