document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const passwordInput = document.getElementById('password');
    const fileInput = document.getElementById('file-input');
    const messageBox = document.getElementById('message-box');

    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = passwordInput.value;
        const file = fileInput.files[0];

        if (password === 'your_admin_password' && file) {
            // Simulate file upload
            messageBox.textContent = 'Uploading...';
            setTimeout(() => {
                messageBox.textContent = 'File uploaded successfully!';
                // Here you would typically handle the file upload to the server
            }, 2000);
        } else {
            messageBox.textContent = 'Invalid password or no file selected.';
        }
    });
});