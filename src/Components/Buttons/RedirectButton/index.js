import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

function RedirectButton({
  children, link, isSharing, isScrollingTop, disabled,
}) {
  const onClick = () => {
    if (isScrollingTop) { // back to top
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else if (isSharing) {
      navigator.clipboard.writeText('https://tjxufang.github.io');
    } else {
      window.open(
        link,
        '_blank',
      );
    }
  };

  return (
    <button type="button" className="redirect-button" onClick={onClick} disabled={disabled}>
      <div className="row">
        {children}
        {/* eslint-disable-next-line no-nested-ternary */}
        {link
          ? (
            <div className="redirect-button-icon">
              &#8599;
            </div>
          )
          : isScrollingTop
            ? (
              <div className="redirect-button-icon">
                &#8593;
              </div>
            )
            : (
              <div className="redirect-button-icon">
                &#9829;
              </div>
            )}
      </div>
    </button>
  );
}

export default RedirectButton;
RedirectButton.defaultProps = {
  link: null,
  isSharing: false,
  isScrollingTop: false,
  disabled: false,
};
RedirectButton.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
  isSharing: PropTypes.bool,
  isScrollingTop: PropTypes.bool,
  disabled: PropTypes.bool,
};
