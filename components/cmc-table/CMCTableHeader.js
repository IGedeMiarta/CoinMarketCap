import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import Info from '../../assets/svg/info'

const styles = {
    textIcon : `flex items-center justify-center`,
}

const CMCTableHeader = () => {
  return (
    <tbody>
        <tr>
            <th></th>
            <th className='flex items-center'><b># &nbsp; </b> <ChevronDown/></th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>7d %</th>
            <th><div className={styles.textIcon}><p className='mr-2'>Marker Cap</p><Info/></div></th>
            <th><div className={styles.textIcon}><p className='mr-2'>Valume</p><Info/></div></th>
            <th><div className={styles.textIcon}><p className='mr-2'>Circulating Supply</p><Info/></div></th>
            <th>Last 7 days </th>
        </tr>
    </tbody>
  )
}

export default CMCTableHeader
