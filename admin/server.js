const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/upload', upload.single('file'), async (req, res) => {
    const { password } = req.body;

    const passwordMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (passwordMatch) {
        // Handle file upload
        // req.file contains the uploaded file information
        res.json({ message: 'File uploaded successfully!' });
    } else {
        res.status(401).json({ message: 'Invalid password.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});