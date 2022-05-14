import React from 'react'
import Image from 'next/image'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import eth from '../assets/eth.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from "./cmc-table/Rate";
import TrendingCard from './TrendingCard'

const styles = {
    trendingWrapper: `mx-auto max-w-screen-xl px-4`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center`,
}

const trendingData = [
    {
        number:1,
        symbol:'BTC',
        name:'Bitcoin',
        icon:btc,
        isIncrement:true,
        rate:'2.53%',

    },
    {
        number:2,
        symbol:'USDT',
        name:'Tether',
        icon:usdt,
        isIncrement:false,
        rate:'0.53%',
    },{
        number:3,
        symbol:'ETH',
        name:'Ethereum',
        icon:eth,
        isIncrement:true,
        rate:'2.53%',
    }
];

function Trending() {
    const [checked, setChecked] = React.useState(false);

  return (
    <div className=''>
        <div className='text-white'>
      <div className={styles.trendingWrapper}>
          <div className='flex justify-between'>
              <h1 className={styles.h1}>Todays Cryptocurrencies Price by Market Cap</h1>

              <div className='flex content-end'>
                    <p className='text-gray-400'>Highlight &nbsp; </p>
                    <ReactSwitch checked={checked} onChange={()=> {setChecked(!checked)}} />
              </div>
          </div>
          <div className='flex'>
              <p className='text-gray-400'>The global crypto market cap is $1.74T, a &nbsp;</p>
              <span>
                  <Rate isIncrememt={true} rate="0.53%" />
              </span>
              <p>&nbsp; decrease over the last day. <span className='underline'>Read More</span></p>
   
          </div>
          <br/>
          <div className={styles.flexCenter}>
              <TrendingCard title='Trending' icon={fire} trendingData={trendingData} />
              <TrendingCard title='Bigest Gainers' icon={gainers} trendingData={trendingData} />
              <TrendingCard title='Recently Added' icon={recent} trendingData={trendingData} />
          </div>
      </div>
    </div>
    </div>
  )
}

export default Trending
