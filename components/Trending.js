import React from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import eth from '../assets/eth.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from "./cmc-table/Rate";
import TrendingCard from './TrendingCard'
import Shiba from '../assets/shiba.png'
import Tera from '../assets/tera.png'
import xrp from '../assets/xrp.png' 
import Binanace from '../assets/bnb.png'
import Cardanao from '../assets/cardano.png'
import Solana from '../assets/solana.png'
 

const styles = {
    trendingWrapper: `mx-auto max-w-screen-xl px-4`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center`,
}
const RecentlyAded = [
    {
        number:1,
        symbol:'BNB',
        name:'Binance Coin',
        icon:Binanace,
        isIncrement:true,
        rate:'4.53%',

    },
    {
        number:2,
        symbol:'SOL',
        name:'Solana',
        icon:Solana,
        isIncrement:false,
        rate:'11.53%',
    },{
        number:3,
        symbol:'ADA',
        name:'Cardano',
        icon:Cardanao,
        isIncrement:false,
        rate:'6.88%',
    }
];

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

const bigestGain = [
    {
        number:1,
        symbol:'XRP',
        name:'Ripple',
        icon:xrp,
        isIncrement:true,
        rate:'6.3%',

    },
    {
        number:2,
        symbol:'TERA',
        name:'Tera',
        icon:Tera,
        isIncrement:false,
        rate:'9.53%',
    },{
        number:3,
        symbol:'SHIB',
        name:'Shiba Inu',
        icon:Shiba,
        isIncrement:false,
        rate:'8.53%',
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
              <TrendingCard title='Bigest Gainers' icon={gainers} trendingData={bigestGain} />
              <TrendingCard title='Recently Added' icon={recent} trendingData={RecentlyAded} />
          </div>
      </div>
    </div>
    </div>
  )
}

export default Trending
