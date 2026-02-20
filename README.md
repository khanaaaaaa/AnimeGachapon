# Anime Gachapon 🎰

A fun, interactive Gachapon-style anime recommendation website that helps you discover random anime with a delightful capsule machine animation.

## Features

- **Gachapon Machine Animation** - Watch a capsule drop and open to reveal your anime
- **Random Anime Discovery** - Get truly random anime recommendations from MyAnimeList
- **Browse Top Anime** - Explore the top 25 rated anime with rank badges
- **Personalized Recommendations** - Search any anime and get similar recommendations
- **Feeling Lucky Button** - Get instant random anime on the browse page
- **Streaming Links** - Direct links to where you can watch the anime
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Modal Views** - Click images for detailed fullscreen information

## Design

- Clean, modern interface with creamish color scheme
- Soft pink accents (#FFB6C1, #FFA0B0)
- Smooth animations and transitions
- Intuitive navigation across all pages

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **API**: [Jikan API](https://jikan.moe/) (unofficial MyAnimeList API)
- **Styling**: Modern CSS with flexbox, grid, and animations

## Pages

1. **Gachapon** - Main page with animated capsule machine for random anime
2. **Browse** - Grid view of top 25 anime with rank badges and "Feeling Lucky" button
3. **Recommendations** - Search anime and discover similar titles
4. **About** - Information about the project

## How to Use

1. **Gachapon Page**: Click "PULL!" to spin the machine and get a random anime
2. **Browse Page**: Explore top anime or click "Feeling Lucky?" for instant random pick
3. **Recommendations**: Search for an anime, then get personalized recommendations
4. Click any anime image for detailed information in a modal view
5. Use "Get Recommendations" buttons to chain discoveries

## API Information

This project uses the Jikan API v4:
- `/random/anime` - Fetch random anime
- `/top/anime` - Get top-rated anime list
- `/anime/{id}/recommendations` - Get similar anime
- `/anime/{id}/streaming` - Get streaming platform links

**Rate Limits**: 3 requests/second, 60 requests/minute

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/khanaaaaaa/AnimeGachapon.git
```

2. Open `index.html` in your browser - no build process needed!

## Future Enhancements

- User favorites/watchlist
- Filter by genre, year, or rating
- Share recommendations via URL
- Dark mode toggle
- Anime comparison feature

## 📝 License

MIT License - feel free to use this project for learning or personal use.

## 🙏 Credits

- Anime data provided by [MyAnimeList](https://myanimelist.net/)
- API access via [Jikan API](https://jikan.moe/)
- Built with ❤️ for anime fans

---

**Live Demo**: [View on GitHub Pages](https://khanaaaaaa.github.io/AnimeGachapon/)

**Repository**: [github.com/khanaaaaaa/AnimeGachapon](https://github.com/khanaaaaaa/AnimeGachapon)
