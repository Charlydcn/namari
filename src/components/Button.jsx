import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


export default function Button({ text, id = false, arrow = false }) {
    return (
        <button id={ id } className='font-bold border-2 border-black p-2 transition-all duration-500 hover:text-gold hover:border-gold'>
            { text }
            { arrow ? <FontAwesomeIcon icon={faCaretRight} /> : null }
        </button>
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    id : PropTypes.string,
    arrow : PropTypes.bool,
};
