import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        setTours((prevTours) => prevTours.filter(tour => tour.id !== id));
    };

    return (
        <main>
            <h1>Tour Comparison App</h1>
            <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
        </main>
    );
}

export default App;