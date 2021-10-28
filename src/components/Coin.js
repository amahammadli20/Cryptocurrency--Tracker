//keyword: rafce
import React from 'react';
import './Coin.css';

const Coin = ({image, name, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                
                <div className='coin'>
                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>

                    <p className='coin-symbol'>
                        {symbol}
                    </p>
                </div>

                <div className='coin-data'>
                    <p className='coin-price'>
                        ${price}
                    </p>

                    <p className='coin-volume'>
                        ${volume.toLocaleString()} 
                        {/* we used toLocaleString() method in order to keep comas of the volume keyword's value (Ex: $1,156,083,787,009, otherwise it would turn into $1156083787009) */}
                    </p>

                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketCap'>
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
