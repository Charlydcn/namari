// Nav.jsx
import NavLink from './NavLink';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from "/src/assets/img/logo.png";


export default function Nav({ mainLinks, socialLinks }) {
  return (
        <nav className='flex items-center justify-around py-6 px-1'>
            <img src={logo} alt="Logo" className='h-5'/>

            <ul className='hidden'>
                {
                    // on fait un map sur le tableau mainLinks passé en props, puis on créer chaque lien avec le composant NavLink
                    mainLinks.map((link, index) => (
                        <NavLink key={index} href={link.href} text={link.text} />
                    ))
                }
            </ul>

            <ul className='flex gap-3'>
                {
                    // on fait un map sur le tableau mainLinks passé en props, puis on créer chaque lien avec le composant NavLink
                    socialLinks.map((link, index) => (
                        <NavLink key={index} href={link.href} text={link.text} />
                    ))
                }
            </ul>

            <button className=''>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </nav>
  );
}

Nav.propTypes = {
    // 'mainLinks' est une liste (tableau) d'objets qui doit être définie (isRequired).

    // arrayOf = on attend un tableau
    mainLinks: PropTypes.arrayOf(

        // formes (shape) spécifiques, c'est-à-dire des objets
        PropTypes.shape({                     
            // string + obligatoire  
            href: PropTypes.string.isRequired,

            // soit string, soit élément React (exemple: <FontAwesomeIcon icon={exemple}/> ) + obligatoire
            text: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element         
            ]).isRequired
        })
    ).isRequired,

    // pareil que 'mainLinks', mais pour les liens vers les réseaux sociaux.
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ])
        })
    ).isRequired,
};

