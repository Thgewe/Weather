import React, { memo } from 'react';
import cl from './highlights.module.scss';
import HighlightCard from '../HIghlightCard/HighlightCard';
import Humidity from '../Humidity/Humidity';
import ValueOfSmth from '../UI/ValueOfSmth/ValueOfSmth';
import UvMetr from '../UvMetr/UvMetr';
import SunSetRise from '../SunSetRise/SunSetRise';
import MinMaxTemp from '../MinMaxTemp/MinMaxTemp';

const Highlights = memo(({today}) => {

    if (today === undefined) return

    const { astro , day } = today;
    console.log('highlights')
    
    return ( 
        <div className={cl.grid}>
            <HighlightCard
                title="UV Index"
            >
                <UvMetr uvIndex={day.uv}/>
            </HighlightCard>
            <HighlightCard
                title="Wind Status"
                descr="Light breeze"
            >
                <ValueOfSmth value={day.maxwind_kph} unit="km/h"/>
            </HighlightCard>
            <HighlightCard
                title={"Sunrise & Sunset"}
            >
                <SunSetRise setTime={astro.sunset} riseTime={astro.sunrise}/>
            </HighlightCard>
            <HighlightCard
                title="Humidity"
                descr="Miserable"
            >
                <Humidity humidity={day.avghumidity}/>
            </HighlightCard>
            <HighlightCard
                title="Visibility"
                descr="Good visibility"
            >
                <ValueOfSmth value={day.avgvis_km} unit="km"/>
            </HighlightCard>
            <HighlightCard
                title={"Min & Max temp"}
            >
                <MinMaxTemp 
                    mintemp_c={day.mintemp_c}
                    maxtemp_c={day.maxtemp_c}
                    mintemp_f={day.mintemp_f}
                    maxtemp_f={day.maxtemp_f}
                />
            </HighlightCard>
        </div>
     );
})
 
export default Highlights;