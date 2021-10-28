import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from './components/Coin';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log('Error alert: ', error))
  }, [])

  //we catch whatever is written to search and get its value
  const handleChange = e => {
    setSearch(e.target.value)
  }

  //func for filtering actual coins and displaying whatever we type in
  const filteredCoins = coins.filter(eachCoin => 
    eachCoin.name.toLowerCase().includes(search.toLowerCase())
    );
  
  return (
    <div className="coin-app">
        <div className='coin-search'>
          <h1 className='coin-search-title'>Search a Currency</h1>

          <form>
            <input 
              type='text' 
              placeholder='Search' className='coin-search-input' 
              onChange={handleChange}
              />
          </form>
        </div>

        {filteredCoins.map(coin => {
          return <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.market_cap_change_percentage_24h}
            marketCap={coin.market_cap}
          />
          })
        }
    </div>
  );
}

export default App;
