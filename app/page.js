import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import References from '../components/References';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <References />
            <Contact />
            <Footer />
        </main>
    );
}
