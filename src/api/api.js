const apiUrl = 'http://api.tvmaze.com/schedule?country=US&date=2014-12-01';

export const getShows = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}