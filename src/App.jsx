import { useState } from 'react';
import HindiMovie from './components/HindiMovie';
import HollywoodMovie from './components/HollywoodMovie';
import moviesData from '../detailed_movies_list_100.json';

const { hindi_movies, hollywood_movies } = moviesData;

function App() {
  const [search, setSearch] = useState('');
  const [movieType, setMovieType] = useState('all'); // all, hindi, hollywood
  const [genre, setGenre] = useState('all'); // all genres

  // Cleaned genres array (internal values)
  const genres = [
    'all', 'Action', 'Thriller', 'Romance', 'Comedy',
    'Adventure', 'Musical/Fantasy', 'Action/Drama', 'Action/Saga',
    'Crime/Thriller', 'Period/Action', 'War/Action', 'Horror/Comedy',
    'Mystery/Adventure', 'Comedy Drama', 'Romance/Medical Drama',
    'Action/Adventure', 'Animation/Adventure', 'Action/Sci‑Fi',
    'Action/Superhero', "Suspense Mystry", 'Action/Thriller'
  ];

  // Filter Hindi movies by search and genre
  const filteredHindi = hindi_movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === 'all' || movie.genre.toLowerCase() === genre.toLowerCase())
  );

  // Filter Hollywood movies by search and genre
  const filteredHollywood = hollywood_movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()) &&
    (genre === 'all' || movie.genre.toLowerCase() === genre.toLowerCase())
  );

  return (
    <>
      {/* Responsive Navbar */}
      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#092635',
          color: 'white',
        }}
      >
        <h1 style={{ margin: '5px 0' }}>Movies Time</h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            alignItems: 'center',
            margin: '5px 0'
          }}
        >
          <input
            type="text"
            placeholder="Search Movies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: 6,
              borderRadius: 5,
              border: 'none',
              minWidth: 150,
              flex: '1 1 150px'
            }}
          />

          <select
            value={movieType}
            onChange={e => setMovieType(e.target.value)}
            style={{
              padding: 6,
              borderRadius: 5,
              minWidth: 120,
              flex: '1 1 120px'
            }}
          >
            <option value="all">All Types</option>
            <option value="hindi">Hindi</option>
            <option value="hollywood">Hollywood</option>
          </select>

          <select
            value={genre}
            onChange={e => setGenre(e.target.value)}
            style={{
              padding: 6,
              borderRadius: 5,
              minWidth: 150,
              flex: '1 1 150px'
            }}
          >
            {genres.map(g => (
              <option key={g} value={g.toLowerCase()}>
                {g === 'all' ? 'All Categories' : g}
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* Movie Display Section */}
      <div style={{ padding: 20, color: 'white', gap: '5px' }}>
        {(movieType === 'all' || movieType === 'hindi') && (
          <HindiMovie movies={filteredHindi} />
        )}
        {(movieType === 'all' || movieType === 'hollywood') && (
          <HollywoodMovie movies={filteredHollywood} />
        )}
      </div>
    </>
  );
}

export default App;