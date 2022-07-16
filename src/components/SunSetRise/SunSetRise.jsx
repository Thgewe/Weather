import React from 'react';
import cl from './sunSetRise.module.scss';
import sunset from '../../images/png/sunset32px.png';
import sunrise from '../../images/png/sunrise32px.png';

const SunSetRise = ({setTime, riseTime}) => {
    return ( 
        <div className={cl.sun}>
            <div className={cl.item}>
                <img src={sunrise} alt="sunrise" />
                <div className={cl.time}>{riseTime}</div>
            </div>
            <div className={cl.item}>
                <img src={sunset} alt="sunset" />
                <div className={cl.time}>{setTime}</div>
            </div>
        </div>
     );
}
 
export default SunSetRise;
