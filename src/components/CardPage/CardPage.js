import React, { useState, useEffect } from 'react';
//css imported
import "./CardPage.css"
//import component
import Card from '../Card/Card';
import FilterDropdown from '../FilterDropdown/FilterDropdown';


const CardPage = () => {
  const [cards, setCards] = useState([]);
  const [activeTab, setActiveTab] = useState('Your');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = {
          data: [
            {
              name: 'Mixmax',
              budget_name: 'Software subscription',
              owner_id: 1,
              spent: {
                value: 100,
                currency: 'SGD'
              },
              available_to_spend: {
                value: 1000,
                currency: 'SGD'
              },
              card_type: 'burner',
              expiry: '9 Feb',
              limit: 100,
              status: 'active'
            },
            {
              name: 'Quickbooks',
              budget_name: 'Software subscription',
              owner_id: 2,
              spent: {
                value: 50,
                currency: 'SGD'
              },
              available_to_spend: {
                value: 250,
                currency: 'SGD'
              },
              card_type: 'subscription',
              limit: 10,
              status: 'active'
            },
            // Add more example data entries here
            {
              name: 'Card3',
              budget_name: 'Budget3',
              owner_id: 3,
              spent: {
                value: 75,
                currency: 'USD'
              },
              available_to_spend: {
                value: 500,
                currency: 'USD'
              },
              card_type: 'subscription',
              limit: 50,
              status: 'blocked'
            },
            {
              name: 'Card4',
              budget_name: 'Budget4',
              owner_id: 4,
              spent: {
                value: 20,
                currency: 'EUR'
              },
              available_to_spend: {
                value: 200,
                currency: 'EUR'
              },
              card_type: 'burner',
              expiry: '30 Sep',
              limit: 200,
              status: 'active'
            },
            {
              name: 'Card5',
              budget_name: 'Budget5',
              owner_id: 5,
              spent: {
                value: 150,
                currency: 'CAD'
              },
              available_to_spend: {
                value: 800,
                currency: 'CAD'
              },
              card_type: 'subscription',
              limit: 20,
              status: 'active'
            },
            {
              name: 'Card6',
              budget_name: 'Budget6',
              owner_id: 6,
              spent: {
                value: 90,
                currency: 'USD'
              },
              available_to_spend: {
                value: 1000,
                currency: 'USD'
              },
              card_type: 'burner',
              expiry: '15 Nov',
              limit: 150,
              status: 'active'
            },
            {
              name: 'Card7',
              budget_name: 'Budget7',
              owner_id: 7,
              spent: {
                value: 30,
                currency: 'EUR'
              },
              available_to_spend: {
                value: 500,
                currency: 'EUR'
              },
              card_type: 'subscription',
              limit: 30,
              status: 'active'
            },
            {
              name: 'Card8',
              budget_name: 'Budget8',
              owner_id: 8,
              spent: {
                value: 70,
                currency: 'CAD'
              },
              available_to_spend: {
                value: 400,
                currency: 'CAD'
              },
              card_type: 'subscription',
              limit: 15,
              status: 'blocked'
            },
            {
              name: 'Card9',
              budget_name: 'Budget9',
              owner_id: 9,
              spent: {
                value: 120,
                currency: 'USD'
              },
              available_to_spend: {
                value: 900,
                currency: 'USD'
              },
              card_type: 'burner',
              expiry: '22 Aug',
              limit: 80,
              status: 'active'
            },
            {
              name: 'Card10',
              budget_name: 'Budget10',
              owner_id: 10,
              spent: {
                value: 40,
                currency: 'EUR'
              },
              available_to_spend: {
                value: 300,
                currency: 'EUR'
              },
              card_type: 'burner',
              expiry: '5 Dec',
              limit: 120,
              status: 'active'
            }, {
              name: 'Card11',
              budget_name: 'Budget11',
              owner_id: 10,
              spent: {
                value: 40,
                currency: 'EUR'
              },
              available_to_spend: {
                value: 300,
                currency: 'EUR'
              },
              card_type: 'subscription',
              expiry: '5 may',
              limit: 120,
              status: 'active'
            }, {
              name: 'Card12',
              budget_name: 'Budget12',
              owner_id: 10,
              spent: {
                value: 40,
                currency: 'EUR'
              },
              available_to_spend: {
                value: 300,
                currency: 'EUR'
              },
              card_type: 'burner',
              expiry: '5 Dec',
              limit: 120,
              status: 'blocked'
            }
          ],
          page: 1,
          per_page: 10,
          total: 100
        };

        setCards(response.data);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const filteredCards = cards
    .filter((card) => {
      if (activeTab === 'Your') {
        return card.owner_id === 2; // depend on the owner_id
      } else if (activeTab === 'All') {
        return true;
      } else if (activeTab === 'Blocked') {
        return card.status === 'blocked';
      }
    })
    .filter((card) => {
      return card.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((card) => {
      if (filterType === '') {
        return true;
      } else {
        return card.card_type === filterType;
      }
    });

  return (
    <div className="card-page">

      <div className='button-input-wrapper'>
        <div className="tab-buttons">
          <button
            className={activeTab === 'Your' ? 'active' : ''}
            onClick={() => handleTabClick('Your')}
          >
            Your Cards
          </button>
          <button
            className={activeTab === 'All' ? 'active' : ''}
            onClick={() => handleTabClick('All')}
          >
            All Cards
          </button>
          <button
            className={activeTab === 'Blocked' ? 'active' : ''}
            onClick={() => handleTabClick('Blocked')}
          >
            Blocked Cards
          </button>
        </div>
        <div className="search-input">
          <input
            className='input-box'
            type="text"
            placeholder="Search by card name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FilterDropdown onChange={handleFilterChange} />
        </div>
      </div>
      <div className="card-list">
        {filteredCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
