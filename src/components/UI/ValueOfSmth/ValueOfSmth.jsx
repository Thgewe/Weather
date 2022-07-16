import React from 'react';
import cl from './valueOfSmth.module.scss';

const ValueOfSmth = ({value, unit}) => {
    return ( 
        <div className={cl.value}>
            {value}
            <span>{unit}</span>
        </div>
     );
}
 
export default ValueOfSmth;