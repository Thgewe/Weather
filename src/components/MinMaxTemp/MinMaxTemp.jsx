import React from 'react';
import MinTempSVG from '../../images/svg/MinTempSVG';
import MaxTempSVG from '../../images/svg/MaxTempSVG';
import cl from './minMaxTemp.module.scss';

const MinMaxTemp = ({min, max}) => {
    return ( 
        <div className={cl.temp}>
            <div className={cl.item}>
                <div className={cl.svg}><MinTempSVG /></div>
                <div className={cl.number}>
                    {min + '°'}
                </div>
            </div>
            <div className={cl.item}></div>
            <div className={cl.item}>
                <div className={cl.svg}><MaxTempSVG /></div>
                <div className={cl.number}>
                    {max + '°'}
                </div>
            </div>
        </div>
    );
}
 
export default MinMaxTemp;