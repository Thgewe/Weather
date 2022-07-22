import React, { useContext } from 'react';
import cl from './weekCards.module.scss';
import DayOfWeekCard from '../DayOfWeekCard/DayOfWeekCard';
import { TempScaleContext } from '../../context';

const WeekCards = ({week}) => {
    const { isCelsius } = useContext(TempScaleContext);
    if (week === undefined) return
    return (
        <div className={cl.list}>
            {
                week.map((day) =>
                    <DayOfWeekCard
                        key = { day.day }
                        img = { day.img }
                        alt = { day.alt }
                        day = { day.day }
                        min = { isCelsius
                                    ? day.temp.mintemp_c
                                    : day.temp.mintemp_f
                        }
                        max = { isCelsius
                                    ? day.temp.maxtemp_c
                                    : day.temp.maxtemp_f
                        }
                    />
                )
            }
        </div>
     );
}
 
export default WeekCards;