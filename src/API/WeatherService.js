import axios from "axios";

class WeatherService {
    static _apiBase = 'https://weatherapi-com.p.rapidapi.com/';

    static async getForecast(name = 'Moscow') {
        const res = await axios.get(`${this._apiBase}forecast.json?q=${name}&days=3`, {
            headers: {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
            }
        })
        return res
    }
}

export default WeatherService;