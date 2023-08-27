

// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Initializing the Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GitHub API base URL
const githubApiBaseUrl = 'https://api.github.com';

// Route to get music repositories from GitHub
app.get('/music-repositories', async (req, res) => {
    try {
        // Make a request to the GitHub API to get repositories related to music
        const response = await axios.get(`${githubApiBaseUrl}/search/repositories?q=music`);

        // Extract relevant data from the response
        const repositories = response.data.items.map(repo => ({
            name: repo.name,
            owner: repo.owner.login,
            description: repo.description,
            url: repo.html_url,
        }));

        res.status(200).json(repositories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching music repositories.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
} 
