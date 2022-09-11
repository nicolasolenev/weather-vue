const API_KEY = '1ecee8957cc21a11ca80c92ee63c1841';

const DOMAIN = {
  MAIN: 'https://openweathermap.org/',
  API: 'https://api.openweathermap.org/',
};

export const API_TYPE = {
  WEATHER: 'weather',
  FORECAST: 'forecast',
};

export const getUrlByCity = (type, city) =>
  `${DOMAIN.API}data/2.5/${type}?q=${city}&appid=${API_KEY}&units=metric`;

export const getUrlByGeo = (type, lat, lon) =>
  `${DOMAIN.API}data/2.5/${type}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

export const getUrlsByGeo = (lat, lon) => {
  return {
    weather: getUrlByGeo(API_TYPE.WEATHER, lat, lon),
    forecast: getUrlByGeo(API_TYPE.FORECAST, lat, lon),
  };
};

export const getIconUrl = ({ iconId, isForecast }) => {
  if (isForecast) {
    return `${DOMAIN.MAIN}img/wn/${iconId}.png`;
  }

  return `${DOMAIN.MAIN}/img/wn/${iconId}@4x.png`;
};

export const Request = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
