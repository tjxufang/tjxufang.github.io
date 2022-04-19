import React from 'react';
import 'Components/Cards/ExperienceCard.scss';
import PropTypes from 'prop-types';

function ExperienceCard({
  children, title, color, subtitle, imgSrc, orientation = 'right',
}) {
  return (
    <div className="experience-card-container row">
      {orientation === 'right' && (
        <div className="experience-card-picture">
          <img src={imgSrc} alt="loading" />
        </div>
      )}
      {/* <div className="experience-card-picture experience-card-responsive-design"> */}
      {/*    <img src={imgSrc} alt="loading"/> */}
      {/* </div> */}
      <div className="experience-card-text">
        <div className="card-heading col">
          <h1 style={{ color }}>{title}</h1>
          <h3>{subtitle}</h3>
        </div>
        {children?.map((para, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="card-content" key={i}>
            {para}
          </div>
        ))}
      </div>
      {orientation === 'left' && (
        <div className="experience-card-picture">
          <img src={imgSrc} alt="loading" />
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
ExperienceCard.defaultProps = {
  color: null,
  orientation: 'right',
};
ExperienceCard.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  orientation: PropTypes.string,
};
