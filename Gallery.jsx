// src/components/Gallery.jsx
import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const url = 'https://www.course-api.com/react-tours-project';

function Gallery({ tours, setTours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchTours();
  }, [setTours]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">Error loading tours.</h2>;
  if (tours.length === 0) return <h2>No Tours Left</h2>;

  return (
    <section className="gallery">
      {tours.map(tour => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;