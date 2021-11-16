const button = document.querySelector('#btn1');

button.addEventListener('click', () => {
    const value = button.innerText;
    const textDiv = document.querySelector('#text-div');
    if (value === 'Hide') {
        textDiv.style.display = 'none';
        button.innerText = 'Show';
    } else {
        textDiv.style.display = 'block';
        button.innerText = 'Hide';
    }
})