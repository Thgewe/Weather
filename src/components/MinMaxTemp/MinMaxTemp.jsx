import React, { useContext } from 'react';
import MinTempSVG from '../../images/svg/MinTempSVG';
import MaxTempSVG from '../../images/svg/MaxTempSVG';
import cl from './minMaxTemp.module.scss';
import { TempScaleContext } from '../../context';

const MinMaxTemp = ({mintemp_c, maxtemp_c, mintemp_f, maxtemp_f}) => {

    const { isCelsius } = useContext(TempScaleContext)
    const temp = {
        min: isCelsius ? mintemp_c : mintemp_f,
        max: isCelsius ? maxtemp_c : maxtemp_f,
    }

    return ( 
        <div className={cl.temp}>
            <div className={cl.item}>
                <div className={cl.svg}><MinTempSVG /></div>
                <div className={cl.number}>
                    {temp.min + '°'}
                </div>
            </div>
            <div className={cl.item}>
                <div className={cl.svg}><MaxTempSVG /></div>
                <div className={cl.number}>
                    {temp.max + '°'}
                </div>
            </div>
        </div>
    );
}
 
export default MinMaxTemp;