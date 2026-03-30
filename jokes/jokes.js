import express from 'express';

const app = express();
const PORT = 3000;

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Did you hear about the circus fire?",
        punchline: "It was in tents!"
    },
    {
        id: 4,
        joke: "How do you catch a squirrel?",
        punchline: "Climb a tree and act like a nut"
    }
];

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Joke API</title>
            <style>
                body { font-family: Arial; text-align: center; padding: 50px; }
                button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
                #joke { margin-top: 30px; font-size: 18px; }
            </style>
        </head>
        <body>
            <h1>Joke API</h1>
            <button onclick="getJoke()">Get Joke</button>
            <div id="joke"></div>
            <script>
                async function getJoke() {
                    const response = await fetch('/api/v1/random-joke');
                    const data = await response.json();
                    document.getElementById('joke').innerHTML = 
                        '<p><strong>' + data.joke + '</strong></p>' +
                        '<p>' + data.punchline + '</p>';
                }
            </script>
        </body>
        </html>
    `);
});

app.get('/api/v1/random-joke', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
});

app.listen(PORT, () => {
    console.log(`Joke API running on http://localhost:${PORT}`);
});