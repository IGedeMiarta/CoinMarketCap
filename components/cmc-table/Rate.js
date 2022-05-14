import React from 'react'
import CheveronDown from '../../assets/svg/chevronDown'
import CheveronUp from '../../assets/svg/chevronUp'

const styles = {
    rate : `rate flex items-center`,
    red : `ml-2 text-[#EA3943]`,
    green : `ml-2 text-[#17C784]`,
}

const Rate = ({isIncrememt, rate}) => {
    return (
        <div className={styles.rate}>
            {isIncrememt ? <CheveronUp fill='#17C784' /> : <CheveronDown fill='#EA3943' />}
            <p className={isIncrememt ? styles.green : styles.red}>{rate}</p>
        </div>
    )
}

export default Rate