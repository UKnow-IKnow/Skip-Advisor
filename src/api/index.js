import axios from 'axios'; //this library used for api call

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '18cf2c46bfmshedf2e1e3ffd8c31p12e0f6jsn5d0b541feae8'
  }
};


export const getPlacesData = async () => {
    try {
        //request
        const { data: {data} } = await axios.get(URL, options);

        return data;
    }catch (error) {
        console.log(error)
    }
}