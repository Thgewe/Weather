import Highlights from '../components/Highlights/Highlights';
import { useFetch } from '../hooks/useFetch';
import WeatherService from '../API/WeatherService';
import { memo, useEffect, useState } from 'react';
import Loading from '../components/UI/Loading/Loading';
import cl from './mainPage.module.scss';
import MainHeader from '../components/MainHeader/MainHeader';
import WeekCards from '../components/WeekCards/WeekCards';
import { getDayOfWeekByDate, getDayOfWeekByNumber, getDayOfWeekByDateAndNumber } from '../utils/date';
import HourCards from '../components/HourCards/HourCards';
import MainPageLeft from "../components/MainPageLeft/MainPageLeft";

const MainPage = memo(() => {

    const [forecast, setForecast] = useState([]);
    const [isToday, setIsToday] = useState(false);

    const [fetching, loading, error] = useFetch(async (city) => {
        const response =  await WeatherService.getForecast(city);
        setForecast(response.data)
    });

    useEffect(() => {
        console.log('fetch')
        fetching();
    }, [])
    

    const getFakeWeek = () => {
        const day = forecast.forecast?.forecastday;
        if (day === undefined) return
        console.log(day)
        const fakeWeek = [];
        let k = 0;
        for (let i = 0; i < 7; i++) {
            fakeWeek.push({
                img: day[i - k].day.condition.icon,
                alt: day[i - k].day.condition.text,
                day: i < 3
                        ? getDayOfWeekByDate(day[i - k].date)
                        : getDayOfWeekByDateAndNumber(day[0].date)(i),
                temp: {
                    mintemp_c: day[i - k].day.mintemp_c,
                    maxtemp_c: day[i - k].day.maxtemp_c,
                    mintemp_f: day[i - k].day.mintemp_f,
                    maxtemp_f: day[i - k].day.maxtemp_f,
                }
            })
            if (i === 2) k = 3;
            if (i === 5) k = 6;
        }
        return fakeWeek
    }

    const page = loading 
        ? <Loading /> 
        : <View
            isToday = {isToday}
            setIsToday = {setIsToday}
            loading = {loading}
            forecast = {forecast}
            week = {getFakeWeek()}
            fetching = { fetching }
            icon={forecast.current?.condition.icon}
            condition={forecast.current?.condition.text}
            city={forecast.location?.name}
            country={forecast.location?.country}
            dayOfWeek={getDayOfWeekByDate(forecast.location?.localtime.slice(0, 10))}
            localtime={forecast.location?.localtime.slice(11)}
            temp={{c: forecast.current?.temp_c, f: forecast.current?.temp_f}}
            cloud={forecast.current?.cloud}
        />

    return (
        page
    );
})

const View = ({
    isToday,
    setIsToday,
    loading,
    forecast,
    week,
    fetching,
    icon,
    condition,
    city,
    country,
    dayOfWeek,
    localtime,
    temp,
    cloud,
}) => {
    return (
        <div className={cl.page}>
            <div className={cl.left}>
                <MainPageLeft
                    searchFunc={fetching}
                    icon={icon}
                    condition={condition}
                    city={city}
                    country={country}
                    dayOfWeek={dayOfWeek}
                    localtime={localtime}
                    temp={temp}
                    cloud={cloud}
                />
            </div>
            <div className={cl.right}>
                <MainHeader isToday={isToday} setIsToday={setIsToday}/>
                <div className={cl.diagram}>
                    {isToday
                        ? <HourCards day={forecast.forecast?.forecastday[0].hour}/>
                        : <WeekCards week={week}/>
                    }
                </div>
                <h3 className={cl.title}>Today's Highlights</h3>
                <div className={cl.highlights}>
                    {loading
                        ? <Loading />
                        : <Highlights today={forecast.forecast?.forecastday[0]}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage;
