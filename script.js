document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');
});

document.querySelector('.bg-blue-400.font-semibold.py-2.px-4.rounded.mt-4').addEventListener('click', function() {
    const inputField = document.querySelector('input[type="text"]');
    inputField.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});
