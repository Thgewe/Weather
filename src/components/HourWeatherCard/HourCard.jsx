import React from 'react';
import cl from './hourCard.module.scss';
import HourCardWind from "../HourCardWind/HourCardWind";
import HourCardTemp from "../HourCardTemp/HourCardTemp";

const HourCard = ({temp_c, temp_f, wind, deg, time}) => {
    return (
        <div className={cl.card}>
            <HourCardTemp temp_c={temp_c} temp_f={temp_f}/>
            <HourCardWind wind={wind} deg={deg}/>
            <div className={cl.time}>{time}</div>
        </div>
    );
};

export default HourCard;