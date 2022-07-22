import React from 'react';
import cl from './hourCardWind.module.scss';
import {convertKmHtoMS} from "../../utils/convert";
import arrow from '../../images/png/arrow.png';

const HourCardWind = ({wind, deg, dir}) => {



    return (
        <div className={cl.wind}>
            <img
                src={arrow}
                alt={dir}
                className={cl.arrow}
                style={{transform: `rotate(${deg - 90}deg)`}}
            />
            {convertKmHtoMS(wind)}
            <span> m/s</span>
        </div>
    );
};

export default HourCardWind;