// pages/buy-esim.js
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const BuyESIM = () => {
  const [activeTab, setActiveTab] = useState('Local');
  const [filter, setFilter] = useState('');
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('https://api.esimaccess.com/packages', {
          params: { type: activeTab, filter }
        });
        setPackages(response.data);
      } catch (error) {
        console.error('Ошибка загрузки пакетов:', error);
      }
    };

    fetchPackages();
  }, [activeTab, filter]);

  return (
    <>
      <Header />
      <div className="buy-esim">
        <h2>Buy eSIM</h2>
        <div className="tabs">
          {['Local', 'Regional', 'Global'].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Фильтр по стране/регионам"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <div className="packages">
          {packages.length > 0 ? (
            packages.map(pkg => (
              <div key={pkg.id} className="package-card">
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
                <button>Купить</button>
              </div>
            ))
          ) : (
            <p>Пакеты не найдены</p>
          )}
        </div>
      </div>
      <style jsx>{`
        .buy-esim {
          padding: 20px;
        }
        .tabs button {
          margin-right: 10px;
        }
        .tabs .active {
          font-weight: bold;
        }
        .package-card {
          border: 1px solid #ddd;
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

export default BuyESIM;
