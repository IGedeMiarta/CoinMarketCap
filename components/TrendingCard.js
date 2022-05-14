import React from 'react'
import Image from 'next/image'
import Morebutton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'

const styles = {
    TrendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    TrendingCardWrapper:`flex items-center justify-between`,
}

const TrendingCard = ({title,icon,trendingData}) => {
  return (
    <div className={styles.TrendingCard}>
      <div className={styles.TrendingCardWrapper}>
          <div className='flex'>
                {icon && <Image src={icon} alt='icon' height={27} width={27} />}
                &nbsp;&nbsp;
                <p className='font-bold'>{title}</p>
          </div>
          <Morebutton />
      </div>
      <br/>
      {trendingData && trendingData.map((item,index) => {
          return (
              <TrendingCardRow 
              key={index} 
              number={item.number} 
              symbol={item.symbol}
              name={item.name}
              icon={item.icon}
              isIncrement={item.isIncrement}
              rate={item.rate} />
          )
      })}
    </div>
  )
}

export default TrendingCard
