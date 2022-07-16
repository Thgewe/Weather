import React from 'react';
import cl from './highlights.module.scss';
import HighlightCard from '../HIghlightCard/HighlightCard';
import Humidity from '../Humidity/Humidity';
import ValueOfSmth from '../UI/ValueOfSmth/ValueOfSmth';
import UvMetr from '../UvMetr/UvMetr';
import SunSetRise from '../SunSetRise/SunSetRise';
import MinMaxTemp from '../MinMaxTemp/MinMaxTemp';

const Highlights = () => {
    return ( 
        <div className={cl.grid}>
            <HighlightCard
                title="UV Index"
            >
                <UvMetr uvIndex={9}/>
            </HighlightCard>
            <HighlightCard
                title="Wind Status"
                descr="Light breeze"
            >
                <ValueOfSmth value={2} unit="km/h"/>
            </HighlightCard>
            <HighlightCard
                title={"Sunrise & Sunset"}
            >
                <SunSetRise setTime="09:11 PM" riseTime="05:02 AM"/>
            </HighlightCard>
            <HighlightCard
                title="Humidity"
                descr="Miserable"
            >
                <Humidity humidity={69}/>
            </HighlightCard>
            <HighlightCard
                title="Visibility"
                descr="Good visibility"
            >
                <ValueOfSmth value={10} unit="km"/>
            </HighlightCard>
            <HighlightCard
                title={"Min & Max temp"}
            >
                <MinMaxTemp min={7} max={9}/>
            </HighlightCard>
        </div>
     );
}
 
export default Highlights;