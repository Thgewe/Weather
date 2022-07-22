import React, {useContext} from 'react';
import cl from './Temperature.module.scss';
import {TempScaleContext} from "../../../context";

const Temperature = ({temp}) => {

    const { isCelsius } = useContext(TempScaleContext);

    return (
        <div className={cl.temp}>
            {isCelsius
                ? temp.c
                : temp.f
            }
            <span>{isCelsius ? '°C' : '°F'}</span>
        </div>
    );
};

export default Temperature;