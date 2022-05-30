import axios from "axios"; //this library used for api call

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (type, sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "18cf2c46bfmshedf2e1e3ffd8c31p12e0f6jsn5d0b541feae8",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async(lat, lng) => {
  try{
    const {
      data: { data },
    } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
      params: {
        lat: lat,
        lon: lng,
      },
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '18cf2c46bfmshedf2e1e3ffd8c31p12e0f6jsn5d0b541feae8'
      }
    });
    return data;
  }catch(error){
    console.log(error)
  }
}
