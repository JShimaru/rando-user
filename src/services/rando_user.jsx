import axios from 'axios';

const BASE_URL = 'https://api.randomuser.me/'


async function fetchUser(){
  try {
   let data= await axios.get(BASE_URL).then(res => res.data.results[0])
  console.log(data)
  return data; 
  } catch (error) {
    console.error(error)
  }
  
}

export default fetchUser;