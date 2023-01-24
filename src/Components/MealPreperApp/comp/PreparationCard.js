import React from 'react';
import './PreparationCard.scss';
import PropTypes from 'prop-types';
import background from '../assets/bg-oak.png';

function PreparationCard({ name, detail }) {
  return (
    <div
      className="preparations-card-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="preparations-card">
        <h3>{`${name}：`}</h3>
        <div className="preparations-detail">
          {detail.map((detailItem, index) => (
            <span key={detailItem[0]}>
              {index !== detail.length - 1
                ? `${detailItem}，`
                : `${detailItem}。`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreparationCard;
PreparationCard.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.arrayOf(PropTypes.string).isRequired,
};
