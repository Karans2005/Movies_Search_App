import React from 'react';

function HindiMovie({ movies }) {  // receive filtered movies as prop
  return (
    <>
      <h2 style={{ color: 'white' }}>Hindi Movies</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {movies.length > 0 ? (
          movies.map(item => (
            <div
              key={item.id}
              style={{
                border: '2px solid grey',
                textAlign: 'center',
                width: '210px',
                padding: '15px',
                backgroundColor: 'wheat',
              }}
            >
              <img
                src={item.poster}
                alt={item.title}
                style={{ width: '200px', height: '300px' }}
              />
              <h3>{item.title}</h3>
              <p style={{ textAlignLast: 'justify' }}>{item.language}</p>
              <p style={{ textAlignLast: 'justify' }}>
                <b>{item.releaseYear}</b>
              </p>
              <p style={{ textAlignLast: 'justify' }}>{item.genre}</p>
              <p
                style={{
                  border: '2px solid #092635',
                  width: 'fit-content',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  fontWeight: '600',
                  color: '#333',
                }}
              >
                Rating: {item.rating}
              </p>
              <button
                style={{
                  backgroundColor: '#092635',
                  color: '#f9f9f9',
                  padding: '5px 10px',
                  outline: 'none',
                  border: 'none',
                  fontWeight: '700',
                  borderRadius: '7px',
                  position: 'relative',
                  marginRight: '120px',
                  height: '35px',
                  width: '120px',
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

export default HindiMovie;