document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('upload-form');
    const passwordInput = document.getElementById('password');
    const fileInput = document.getElementById('file-input');
    const messageBox = document.getElementById('message-box');

    uploadForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const password = passwordInput.value;
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('password', password);
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();
                if (response.ok) {
                    messageBox.textContent = 'File uploaded successfully!';
                } else {
                    messageBox.textContent = result.message || 'Upload failed.';
                }
            } catch (error) {
                messageBox.textContent = 'An error occurred.';
            }
        } else {
            messageBox.textContent = 'No file selected.';
        }
    });
});