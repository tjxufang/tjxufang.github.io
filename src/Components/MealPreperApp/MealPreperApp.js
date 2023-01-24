import React from 'react';
import './MealPreperApp.scss';
import MealCard from 'Components/MealPreperApp/comp/MealCard';
import example from 'Components/MealPreperApp/examples/example';

function MealPreperApp() {
  return (
    <div className="meal-preper-app-container">
      <MealCard
        name={example.name}
        preparations={example.preparations}
        steps={example.steps}
      />
    </div>
  );
}

export default MealPreperApp;
