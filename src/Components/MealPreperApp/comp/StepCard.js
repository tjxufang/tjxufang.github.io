import React from 'react';
import './StepCard.scss';
import PropTypes from 'prop-types';
import toChineseNumber from 'Utils/ConvertToChineseNumber';
import background from '../assets/bg-oak.png';

function StepCard({ name, detail, index }) {
  return (
    <div
      className="step-card-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h3 key={name}>
        {toChineseNumber(index + 1)}
        {`、${name}：`}
      </h3>
      <div className="step-card-detail">
        {`${detail}`}
      </div>
    </div>
  );
}

export default StepCard;
StepCard.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
