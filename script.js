// script.js for the online music player

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    const audioPlayer = document.getElementById('audio-player');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const musicSrc = button.getAttribute('data-music-src');
            audioPlayer.src = musicSrc;
            audioPlayer.play();
        });
    });

    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const password = document.getElementById('admin-password').value;
        const musicFile = document.getElementById('music-file').files[0];

        if (password === 'your_admin_password' && musicFile) {
            // Logic to handle music upload
            console.log('Music uploaded:', musicFile.name);
            // Here you would typically send the file to the server
        } else {
            alert('Invalid password or no file selected.');
        }
    });
});