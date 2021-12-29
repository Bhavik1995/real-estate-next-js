import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '345ec39637mshe46b8818339f16bp168a44jsn88dc5889b6b9'
          }
    });

    return data;
}