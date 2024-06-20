import PropTypes from 'prop-types';

function NavLink({ href, text, customClass = null }) {
  return (
    <li className={`transition-opacity duration-300 hover:opacity-60 ${customClass}`}>
        <a href={href}>{text}</a>
    </li>
  );
}

// PropTypes vérifie que les props passés sont du bon type, ça génère des avertissements en dev en cas d'erreur
NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node, // Pour accepter les éléments React
    ]).isRequired,
    customClass: PropTypes.string,
};

export default NavLink;
