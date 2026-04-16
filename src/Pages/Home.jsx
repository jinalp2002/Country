import React from 'react'
import { Link } from 'react-router-dom';
import { HeroSection } from '../Components/Layout/UI/HeroSection';
import About from './About';

function Home() {
    return (
        <div>
            <HeroSection />
            <About />
        </div>

    )
}

export default Home