import React from 'react';

function HollywoodMovie({ movies }) {
  return (
    <>
      <h2 style={{ color: 'white' }}>Hollywood Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {movies.length > 0 ? (
          movies.map(({ id, poster, title, language, releaseYear, genre, rating }) => (
            <div
              key={id}
              style={{
                border: '2px solid grey',
                textAlign: 'center',
                width: 210,
                padding: 15,
                backgroundColor: 'wheat',
              }}
            >
              <img src={poster} alt={title} style={{ width: 200, height: 300 }} />
              <h3>{title}</h3>
              <p>{language}</p>
              <p><b>{releaseYear}</b></p>
              <p>{genre}</p>
              <p
                style={{
                  border: '2px solid #092635',
                  width: 'fit-content',
                  padding: '5px 10px',
                  borderRadius: 5,
                  fontWeight: 600,
                  color: '#333',
                }}
              >
                Rating: {rating}
              </p>
              <button
                style={{
                  backgroundColor: '#092635',
                  color: '#f9f9f9',
                  padding: '5px 10px',
                  border: 'none',
                  fontWeight: 700,
                  borderRadius: 7,
                  width: 120,
                  height: 35,
                  marginTop: 10,
                }}
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: 'white' }}>No movies found.</p>
        )}
      </div>
    </>
  );
}

export default HollywoodMovie;