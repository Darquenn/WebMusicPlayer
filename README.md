# Online Music Player

This project is an online music player built using HTML, CSS, and JavaScript. It features multiple pages for different playlists and an admin page for uploading new music tracks.

## Project Structure

```
online-music-player
├── src
│   ├── admin
│   │   ├── index.html       # Admin page for uploading new music
│   │   ├── styles.css       # Styles specific to the admin page
│   │   └── script.js        # JavaScript for admin interactions
│   ├── playlists
│   │   ├── playlist1.html   # HTML for the first playlist
│   │   ├── playlist2.html   # HTML for the second playlist
│   │   └── styles.css       # Styles for playlist pages
│   ├── index.html           # Homepage of the music player
│   ├── styles.css           # Global styles for the project
│   └── script.js            # Main JavaScript for music player functionality
├── assets
│   ├── music                # Directory for music files
│   └── images               # Directory for images (e.g., album covers)
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Features

- **Multiple Playlists**: Users can navigate through different playlists.
- **Admin Upload**: Admins can upload new music tracks to the playlists by providing the correct password.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd online-music-player
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

- Open `src/index.html` in a web browser to start using the music player.
- Access the admin page at `src/admin/index.html` to upload new music tracks.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License.