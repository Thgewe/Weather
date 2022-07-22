import React from 'react';
import SpinnerSVG from '../../../images/svg/SpinnerSVG';
import cl from './loading.module.scss';

const Loading = () => {
    return ( 
        <div className={cl.loading}>
            <SpinnerSVG />
        </div>
     );
}
 
export default Loading;