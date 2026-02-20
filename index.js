const API = "https://api.jikan.moe/v4";
let spinning = false;

async function loadAnime() {
    try {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('machine').style.display = 'block';
    } catch (error) {
        showError('Failed to load. Please refresh the page.');
    }
}

function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
}

async function spin() {
    if (spinning) return;
    spinning = true;
    document.getElementById('spin-btn').disabled = true;
    document.getElementById('results').style.display = 'none';
    
    const gachaContent = document.getElementById('gacha-content');
    const dispenserCapsule = document.getElementById('dispenser-capsule');
    
    gachaContent.style.display = 'none';
    dispenserCapsule.classList.remove('show', 'open');
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    try {
        const res = await fetch(`${API}/random/anime`);
        const data = await res.json();
        const selectedAnime = data.data;
        
        dispenserCapsule.classList.add('show');
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        dispenserCapsule.classList.add('open');
        await new Promise(resolve => setTimeout(resolve, 400));
        
        gachaContent.innerHTML = `<img src="${selectedAnime.images.jpg.image_url}" alt="${selectedAnime.title}">`;
        gachaContent.style.display = 'flex';
        
        await loadStreamingInfo(selectedAnime);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        showResult(selectedAnime);
    } catch (error) {
        showError('Failed to get anime. Try again!');
    }
    
    spinning = false;
    document.getElementById('spin-btn').disabled = false;
}

async function loadStreamingInfo(anime) {
    try {
        const res = await fetch(`${API}/anime/${anime.mal_id}/streaming`);
        const data = await res.json();
        anime.streaming = data.data || [];
    } catch {
        anime.streaming = [];
    }
}

function showResult(anime) {
    const genres = anime.genres.map(g => g.name).slice(0, 3).join(', ') || 'N/A';
    const streamingLinks = anime.streaming.length > 0
        ? anime.streaming.slice(0, 3).map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join(' • ')
        : 'Not available';
    
    document.getElementById('results').innerHTML = `
        <div class="result-card">
            <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}" onclick="showModal()">
            <div class="result-card-body">
                <h3>${anime.title}</h3>
                <div class="genre">Genres: ${genres}</div>
                <div class="score">Score: ${anime.score || 'N/A'}</div>
                <div class="episodes">Episodes: ${anime.episodes || '?'}</div>
                <div class="streaming">Stream: ${streamingLinks}</div>
                <p style="margin-top: 10px; color: #ff69b4; line-height: 1.6;">${anime.synopsis?.substring(0, 200) || 'No synopsis available'}...</p>
                <a href="${anime.url}" target="_blank" rel="noopener" class="mal-link">View on MyAnimeList</a>
            </div>
        </div>
    `;
    document.getElementById('results').style.display = 'flex';
    window.currentAnime = anime;
}

function showModal() {
    const anime = window.currentAnime;
    const genres = anime.genres.map(g => g.name).join(', ');
    const streamingLinks = anime.streaming.length > 0
        ? anime.streaming.slice(0, 3).map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join(' • ')
        : 'Not available';
    
    document.getElementById('modal-body').innerHTML = `
        <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}">
        <div class="modal-info">
            <h2>${anime.title}</h2>
            <p><strong>Genres:</strong> ${genres}</p>
            <p><strong>Score:</strong> ${anime.score || 'N/A'}</p>
            <p><strong>Episodes:</strong> ${anime.episodes || 'Unknown'}</p>
            <p><strong>Status:</strong> ${anime.status}</p>
            <p><strong>Type:</strong> ${anime.type}</p>
            <p><strong>Streaming:</strong> ${streamingLinks}</p>
            <p><strong>Synopsis:</strong> ${anime.synopsis || 'No synopsis available'}</p>
            <p><a href="${anime.url}" target="_blank" rel="noopener">View on MyAnimeList →</a></p>
        </div>
    `;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

loadAnime();