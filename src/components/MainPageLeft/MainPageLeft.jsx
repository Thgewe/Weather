import React from 'react';
import cl from './mainPageLeft.module.scss'
import Search from "../Search/Search";
import Temperature from "../UI/Temperature/Temperature";

const MainPageLeft = ({searchFunc, icon, temp, condition, city, country, dayOfWeek, localtime, cloud}) => {
    return (
        <div className={cl.main}>
            <div className={cl.search}>
                <Search searchFunc={searchFunc}/>
            </div>
            <img className={cl.image} src={icon} alt={condition}/>
            <div className={cl.temp}>
                <Temperature temp={temp}/>
            </div>
            <div className={cl.location}>
                {city + ', ' + country}
            </div>
            <div className={cl.time}>
                {dayOfWeek + ', '}
                <span>{localtime}</span>
            </div>
            <span className={cl.line}></span>
            <div className={cl.clouds}>
                Clouds - {cloud}%
            </div>
            <div className={cl.condition}>
                {condition}
            </div>
        </div>
    );
};

export default MainPageLeft;