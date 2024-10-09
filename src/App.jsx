import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Sponsors />
        </div>
    );
}

export default App;
