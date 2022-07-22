import React, {useContext} from 'react';
import cl from './hourCardTemp.module.scss';
import {TempScaleContext} from "../../context";

const HourCardTemp = ({temp_c, temp_f}) => {
    const { isCelsius } = useContext(TempScaleContext);
    let tempClass = cl.temp + ' ';
    switch (true) {
        case (temp_c < -25):
            tempClass += cl.veryCold;
            break;
        case (temp_c < -10):
            tempClass += cl.cold;
            break;
        case (temp_c < 10):
            tempClass += cl.chilly;
            break;
        case (temp_c < 25):
            tempClass += cl.warm;
            break;
        case (temp_c >= 25):
            tempClass += cl.hot;
            break;
        default:
            tempClass += cl.warm;
    }
    return (
        <div className={tempClass}>
            {isCelsius
                ? Math.round(temp_c) + '°'
                : Math.round(temp_f) + '°'
            }
        </div>
    );
};

export default HourCardTemp;