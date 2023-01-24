import React from 'react';
import './MealCard.scss';
import PropTypes, { string } from 'prop-types';
import PreparationCard from 'Components/MealPreperApp/comp/PreparationCard';
import StepCard from 'Components/MealPreperApp/comp/StepCard';
import background from '../assets/bg-dark-wood.png';

function MealCard({ name, preparations, steps }) {
  return (
    <div
      className="meal-card-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="meal-card-name">
        <h1>{name}</h1>
      </div>
      <div className="meal-card-preparations">
        <h2>准备：</h2>
        <div className="meal-card-preparations-content flex-wrap">
          {preparations.map(
            (item) => <PreparationCard key={item.name} name={item.name} detail={item.detail} />,
          )}
        </div>
      </div>
      <div className="meal-card-steps col">
        <div>
          <h2>步骤：</h2>
        </div>
        {steps.map(
          (item, index) => (
            <StepCard
              key={item.name}
              index={index}
              name={item.name}
              detail={item.detail}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default MealCard;
MealCard.propTypes = {
  name: PropTypes.string.isRequired,
  preparations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    detail: PropTypes.arrayOf(string),
  })).isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    detail: PropTypes.string,
  })).isRequired,
};
