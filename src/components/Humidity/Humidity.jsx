import React from 'react';
import ValueOfSmth from '../UI/ValueOfSmth/ValueOfSmth';
import cl from './humidity.module.scss';

const Humidity = ({humidity}) => {
    return ( 
        <div className={cl.humidity}>
            <ValueOfSmth value={humidity} unit="%"/>
            <div className={cl.slider}>
                <span 
                    className={cl.fill} 
                    style={{height: `${humidity}%`}}
                ></span>
            </div>
        </div>
     );
}
 
export default Humidity;
