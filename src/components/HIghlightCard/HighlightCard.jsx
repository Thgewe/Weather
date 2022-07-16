import React from 'react';
import cl from './highlightCard.module.scss';

const HighlightCard = ({title, descr, children}) => {
    return ( 
        <div className={cl.card}>
            <div className={cl.title}>{title}</div>
            {children
                ? <div className={cl.center}>{children}</div>
                : null
            }
            {descr
                ? <div className={cl.descr}>{descr}</div>
                : null
            }
        </div>
     );
}
 
export default HighlightCard;
