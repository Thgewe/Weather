import React, {useRef} from 'react';
import cl from './hourCards.module.scss';
import HourCard from "../HourWeatherCard/HourCard";

const HourCards = ({day}) => {

    const scroll = useRef();

    let speed = 1;
    let left = 0;
    let drag = false;
    let coorX = 0;

    const down = (e) => {
        drag = true;
        coorX = e.pageX - scroll.current.offsetLeft;
    }
    const up = () => {
        drag = false;
        left = scroll.current.scrollLeft;
    }
    const move = (e) => {
        if (drag) {
            scroll.current.scrollLeft = left - (e.pageX - scroll.current.offsetLeft - coorX)*speed;
        }
    }
    return (
        <div
            className={cl.dia}
        >
            <div
                className={cl.track}
                onMouseDown={down}
                onMouseUp={up}
                onMouseMove={move}
                ref={scroll}
            >
                {day.map((hour) =>
                    <HourCard
                        temp_c={hour.temp_c}
                        temp_f={hour.temp_f}
                        wind={hour.wind_kph}
                        deg={hour.wind_degree}
                        dir={hour.wind_dir}
                        time={hour.time.slice(-5)}
                    />
                )}
            </div>
        </div>
    );
}
 
export default HourCards;