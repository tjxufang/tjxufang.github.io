import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function MainButton({
  children, type = 'button', disabled, disabledText,
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className="main-button" disabled={disabled}>
      <div className="bg-img">
        <img src="assets/btn-bg.png" alt="button-background" />
      </div>
      <div className="btn-text flex-center">
        {disabled ? disabledText : children}
      </div>
    </button>
  );
}

export default MainButton;
MainButton.defaultProps = {
  disabled: false,
  disabledText: null,
  type: 'button',
};
MainButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  disabledText: PropTypes.string,
};
