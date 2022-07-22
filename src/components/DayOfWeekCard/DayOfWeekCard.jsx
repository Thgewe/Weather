import React from 'react';
import cl from './dayOfWeekCard.module.scss';

const DayOfWeekCard = ({img, alt, day, min, max}) => {
    return (
        <div className={cl.card}>
            <div className={cl.day}>{day.substring(0, 3)}</div>
            <img className={cl.img} src={img} alt={alt}></img>
            <div className={cl.deg}>{Math.round(min)}° <span>{Math.round(max)}°</span></div>
        </div>
    );
};
 
export default DayOfWeekCard;