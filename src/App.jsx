import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Achievements />
                <Contact />
            </main>
            <footer className="py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Josh Swaroop Vegi. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
