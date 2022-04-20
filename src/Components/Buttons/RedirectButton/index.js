import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

function RedirectButton({
  children, type, link, disabled, disabledText,
}) {
  const onClick = (btnType) => {
    switch (btnType) { // back to top
      case 'scroll':
        return () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      case 'copy':
        return () => navigator.clipboard.writeText('https://tjxufang.github.io');
      default:
        return () => window.open(link, '_blank');
    }
  };

  const handleTypes = (btnType) => {
    switch (btnType) {
      case 'copy':
        return <span>&#9829;</span>;
      case 'scroll':
        return <span>&#8593;</span>;
      default: // 'link'
        return <span>&#8599;</span>;
    }
  };

  return (
    <button type="button" className="redirect-button" onClick={onClick(type)} disabled={disabled}>
      <div className="row">
        {disabled ? disabledText : children}
        <div className="redirect-button-icon">
          {handleTypes(type)}
        </div>
      </div>
    </button>
  );
}

export default RedirectButton;
RedirectButton.defaultProps = {
  link: null,
  disabled: false,
  disabledText: null,
};
RedirectButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string,
  disabled: PropTypes.bool,
  disabledText: PropTypes.string,
};
