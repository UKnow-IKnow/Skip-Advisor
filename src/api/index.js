import axios from "axios"; //this library used for api call

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get( URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
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
