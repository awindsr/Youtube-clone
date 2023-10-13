import axios from "axios";

const baseURL = "https://youtube138.p.rapidapi.com/home/";

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/home/',
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '5921911c8amsh4dc46bff7c1e2e8p1f555djsn43731dc99771',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${baseURL}/${url}`, options);
    return data
}