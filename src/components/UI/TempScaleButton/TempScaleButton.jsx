import React from 'react';
import cl from './tempScaleButton.module.scss';

const TempScaleButton = ({children, onClick, isActive}) => {
    return ( 
        <button 
            className={isActive 
                            ? cl.button + ' ' + cl.active 
                            : cl.button
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
}
 
export default TempScaleButton;