import React, { useContext } from 'react';
import { TempScaleContext } from '../../context';
import TempScaleButton from '../UI/TempScaleButton/TempScaleButton';
import cl from './mainHeader.module.scss';

const MainHeader = ({ isToday, setIsToday }) => {

    const { isCelsius, setIsCelsius } = useContext(TempScaleContext);

    const onCelsius = () => {
        setIsCelsius(true);
        localStorage.setItem('tempScale', 'celsius')
    }
    const offCelsius = () => {
        setIsCelsius(false);
        localStorage.setItem('tempScale', 'fahrenheit')
    }
    const onToday = () => {
        setIsToday(true);
    }
    const onWeek = () => {
        setIsToday(false);
    }

    return ( 
        <div className={cl.header}>
            <div className={cl.left}>
                <div 
                    onClick={onToday} 
                    className={isToday ? cl.active : ''}
                >
                    Today
                </div>
                <div 
                    onClick={onWeek} 
                    className={!isToday ? cl.active : ''}
                >
                    Week
                </div>
            </div>
            <div className={cl.right}>
                <TempScaleButton 
                    onClick={onCelsius}
                    isActive={isCelsius}
                >
                    °C
                </TempScaleButton>
                <TempScaleButton
                    onClick={offCelsius}
                    isActive={!isCelsius}
                >
                    °F
                </TempScaleButton>
            </div>
        </div>
     );
}
 
export default MainHeader;
