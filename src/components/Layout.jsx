import Navbar from './Navbar';
import Footer from './Footer';
import GalaxyBackground from './GalaxyBackground';

export default function Layout({ children }) {
    return (
        <>
            <GalaxyBackground />
            <Navbar />
            <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
