import Header from './Header.js';
import TopBar from './TopBar.js'
import Hero from './Hero.js'
import Why from './Why.js'
import Pietre from './Pietre';
import Zodiac from './Zodiac';
import Footer from './Footer.js'
import Galerie from './Galerie.js'
import Produse from './CategoriiProduse.js';
import BackToTop from './BackToTop.js';
import Loader from 'react-spinners/CircleLoader';
import React, { useState, useEffect } from 'react';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="Loader">
                <Loader
                    size={50}
                    color={"#123abc"}
                    loading={loading}
                />
                <p className="Loader-text">Pietrele isi incarca energia</p>
            </div>
            ) : (
                <>
                    <TopBar/>
                    <Header/>
                    <main id="main">
                        <Hero/>
                        <Why/>
                        <Zodiac/>
                        <Produse/>
                        <Galerie/>
                        <Footer/>
                        <BackToTop/>
                    </main>
                </>
            )}
        </>
    );
}

export default Home;
