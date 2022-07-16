import React from 'react';
import cl from './uvMetr.module.scss';
const UvMetr = ({uvIndex}) => {
    const maxIndex = 15;
    let color = '';
    const toDeg = (index) => {
        return 180 / maxIndex * index + 'deg';
    }
    switch (true) {
        case uvIndex <= 2: {
            color = '#3ea72d';
            break
        }
        case uvIndex <= 5: {
            color = '#fff300';
            break
        }case uvIndex <= 7: {
            color = '#f18b00';
            break
        }
        case uvIndex <= 10: {
            color = '#e53210';
            break
        }
        case uvIndex >= 11: {
            color = '#b567a4';
            break
        }
        default: {
            color = '#3ea72d';
        }
    }

    return ( 
        <div className={cl.metr}>
            <div className={cl.inner}>
                <div 
                    className={cl.fill}
                    style={{
                        transform: `rotate(${toDeg(uvIndex)})`,
                        backgroundColor: color,
                    }}
                ></div>
            </div>
            <div className={cl.outer}>
                <div className={cl.number} >
                    {uvIndex}
                </div>
            </div>
        </div>
     );
}
 
export default UvMetr;