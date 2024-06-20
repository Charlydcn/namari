// components ---------------------------------
import Nav from './components/nav/Nav';
// --------------------------------------------

// font awesome -------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from './components/Button';
// --------------------------------------------

function App() {
    // tableau de liens pour la nav
    const mainLinks = [
        { href: "#", text: "HOME" },
        { href: "#", text: "ABOUT" },
        { href: "#", text: "GALLERY" },
        { href: "#", text: "TESTIMONIALS" },
        { href: "#", text: "CLIENTS" },
        { href: "#", text: "PRICING" },
    ];

    // tableau de liens de réseaux sociaux pour la nav
    const socialLinks = [
        { href: "#", text: <FontAwesomeIcon icon={faFacebook} /> },
        { href: "#", text: <FontAwesomeIcon icon={faTwitter} /> },
        { href: "#", text: <FontAwesomeIcon icon={faInstagram} /> },
    ];

    return (
        <>
            <Nav 
                mainLinks={mainLinks} 
                socialLinks={socialLinks} 
            />

            <header className='relative bg-header-img bg-fixed bg-no-repeat bg-cover h-screen px-8'>
                <span className='gold-line'></span>

                <h1 className='text-5xl font-extrabold mb-12'>A FREE AND SIMPLE LANDING PAGE</h1>

                <p>Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!</p>

                <Button text="START CREATING TODAY" arrow={true} />

                <span className='gold-line'></span>
            </header>

            <section className='bg-slate-50'>
                <h2>How we help you to sell your product</h2>
            </section>
        </>
    );
}

export default App;
