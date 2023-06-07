import React from 'react';
//css
import "./Card.css"

const Card = ({ card }) => {
  const renderCardTypeIcon = () => {

    if (card.card_type === 'burner') {
      return <span className='logo'>Burner</span>;
    } else if (card.card_type === 'subscription') {
      return (
        <div className='logo'>
          <span>Subscription</span>
        </div>
      )
    } else {
      return null;
    }
  };

  const renderCardDetails = () => {
    if (card.card_type === 'burner') {
      return (
        <div>
          <p>{card.budget_name}</p>
          <p>Spent: {card.spent.value} {card.spent.currency}</p>
          <p>Available to spend: {card.available_to_spend.value} {card.available_to_spend.currency}</p>
          <p>Expiry: {card.expiry}</p>
          <p  >Status: {card.status}</p>
        </div>
      );
    } else if (card.card_type === 'subscription') {
      return (
        <div>
          <p>{card.budget_name}</p>
          <p>Spent: {card.spent.value} {card.spent.currency}</p>
          <p>Available to spend: {card.available_to_spend.value} {card.available_to_spend.currency}</p>
          <p>Limit: {card.limit}</p>
          <p >Status: {card.status}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="card">
      <div className="card-type">{renderCardTypeIcon()}</div>
      <h2>{card.name}</h2>
      {renderCardDetails()}
    </div>
  );
};

export default Card;
