const apiKey = '1599253eb6764bf2929b60bb49ccb322'; // Replace with your API key
const apiUrl = 'https://rawg.io/@degrace/apikey';

document.getElementById('searchBtn').addEventListener('click', function() {
    const gameName = document.getElementById('gameSearch').value;
    fetchGameData(gameName);
});

async function fetchGameData(gameName) {
    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&page_size=1&search=${gameName}`);
        const data = await response.json();
        displayGameInfo(data.results[0]);
    } catch (error) {
        console.error('Error fetching game data:', error);
    }
}

function displayGameInfo(game) {
    if (!game) {
        document.getElementById('gameInfo').innerHTML = 'No game found';
        return;
    }
    const gameInfo = `
        <h2>${game.name}</h2>
        <p><strong>Release Date:</strong> ${game.released}</p>
        <p><strong>Rating:</strong> ${game.rating}</p>
        <p><strong>Genres:</strong> ${game.genres.map(genre => genre.name).join(', ')}</p>
        <img src="${game.background_image}" alt="${game.name}" style="width:300px;">
    `;
    document.getElementById('gameInfo').innerHTML = gameInfo;
}
